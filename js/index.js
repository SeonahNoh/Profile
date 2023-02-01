window.onload = function() {

  // *** 헤더 메뉴 스크롤 ***
  const logoMeunBgWarp = document.querySelector('.logo-menu-bg-wrap');
  
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if(scrollPos > 80) {
      logoMeunBgWarp.style.backgroundColor = 'rgba(249, 206, 140, 0.8)';
      logoMeunBgWarp.style.backdropFilter = 'blur(5px)';
    } else {
      logoMeunBgWarp.style.backgroundColor = '';
      logoMeunBgWarp.style.backdropFilter = '';
    }
  }, false);

  const logoMenuWarp= document.querySelector('.logo-menu-wrap');


  // *** 헤더 메뉴 클릭 시 본문으로 이동 *** 
  // const menuHg = logoMeunBgWarp.offsetHeight;
  const menuHg = logoMenuWarp.offsetHeight;
  const $menu = document.querySelectorAll('.menu');
  const contentsWrap = document.querySelectorAll('.contents-wrap');

  for(let i = 0; i < $menu.length; i++) {
    $menu[i].addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({top: contentsWrap[i].offsetTop - menuHg, behavior:'smooth'});
    }, false);
  }


  // *** 모바일 메뉴 펼치기 ***
  const menuBars = document.querySelector('.menu-bars')
  const mobileMenu = document.querySelector('.mobile-menu');

  menuBars.addEventListener('click', () => {
    logoMeunBgWarp.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
  }, false);

  window.onresize = function() {
    if(window.innerWidth >= 768) {
      logoMeunBgWarp.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  }


  // *** 모바일 메뉴 클릭 시 본문으로 이동 ***
  const M_menu = document.querySelectorAll('.m-menu');

  for(let i = 0; i < M_menu.length; i++) {
    M_menu[i].addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({top: contentsWrap[i].offsetTop - menuHg, behavior:'smooth'});
      logoMeunBgWarp.classList.remove('active');
      mobileMenu.classList.remove('active');
    }, false);
  };


  // *** 헤더 타이핑 ***
  const typingTxt = document.querySelector('.typing-txt');
  const txts = [
    "행동파", 
    "알잘딱깔센",
    "일잘러",
  ];
  const txtSp = 100; 
  let i = 0;

  const typing = async() => {
    const txt = txts[i].split("");
    while(txt.length) {
      await wait(txtSp);
      typingTxt.innerHTML += txt.shift();
    }

    await wait(800);
    remove();
  }

  const remove = async() => {
    const txt = txts[i].split("");
    while(txt.length) {
      await wait(txtSp);
      txt.pop();
      typingTxt.innerHTML = txt.join("");
    }
    i = !txts[i + 1] ? 0 : (i + 1);
    typing();
  }

  const wait = function(ms) {
    return new Promise(res => setTimeout(res, ms));
  }
  setTimeout(typing, 1500);


  // *** 헤더 타이핑 커서 ***
  const typingBlink = function() {
    typingTxt.classList.toggle('active');
  }
  setInterval(typingBlink, 250);


  // *** About section 라인 그려지는 효과 ***
  const svgDraw = function(el, cor, sp) {
    const path = document.querySelector(el);
    let speed = sp;
    let offset = speed;
    let color = cor;

    set();

    function set() {
      path.style.stroke = color;
      path.style.strokeWidth = 1.5;
      path.style.strokeDasharray = path.getTotalLength() + ',' + path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();
      
      window.requestAnimationFrame(draw.bind(this));
    }
    
    function draw() {
      if(speed < path.getTotalLength()) {
        path.style.strokeDashoffset = path.getTotalLength() - speed;
        window.requestAnimationFrame(draw.bind(this));
        speed = speed + offset;
      } else if(speed > path.getTotalLength()) {
        path.style.fill = color;
      }
    }
  }

  
  // *** About section으로 이동 시 라인 그려지기 ***
  const aboutWarp = document.querySelector('.about-wrap');

  window.addEventListener('scroll', () => {
    if(aboutWarp.offsetTop) {
      svgDraw('#svg-line path', '#f39c12', 23);
    }
  }, {once: true});


    // *** About section 이모티콘 애니메이트 ***
    const $thumbs = document.getElementsByClassName('thumbs');
    Array.from($thumbs).forEach(ele => {
      const thumbsTranslate = [
        { transform: 'translateY(0.2rem)' },
        { transform: 'translateY(-0.6rem)' },
        { transform: 'translateY(0.2rem)' }
      ];
      
      const thumbsTiming = {
        duration: 750,
        easing: 'linear',
        iterations: 'Infinity',
      }
      ele.animate(thumbsTranslate, thumbsTiming);
    });


  // *** Skills Swiper ***
    let swiper = new Swiper('.mySwiper', {
      slidesPerView: 2.4,
      spaceBetween: 10,
      freeMode: true,
      autoplay: {     
        delay: 2000,
        disableOnInteraction: false, 
      },
      breakpoints: { 
        768: {
          slidesPerView: 3.4, 
          autoplay: {     
            delay: 3000, 
          },
        },
        1024: {
          slidesPerView: 4.4,
          autoplay: {     
            delay: 3000, 
          },
        },
        1440: {
          slidesPerView: 5.4,
          autoplay: {     
            delay: 3000, 
          },
        },
      }
    });


  // *** Skills section 동그라미 커서 효과 ***
  const circle = document.querySelector('.circle');
  const percent = document.querySelector('.circle');

  circle.addEventListener('mouseover', () => {
    circle.style.cursor = 'pointer';
  }, false);

  percent.addEventListener('mouseover', () => {
    percent.style.cursor = 'pointer';
  }, false);


  // *** Skills section으로 이동 시 circle progress bar 실행 ***
  const skillsWarp = document.querySelector('.skills-wrap');
  const portfolioWarp = document.querySelector('.portfolio-wrap');
  const $progress = document.querySelectorAll('.progress');
  let name = '';

  window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    let skTop = skillsWarp.offsetTop;
    let pfTop = portfolioWarp.offsetTop;
    if(pos >= skTop - 300 && pos <= pfTop) {
      for(let i = 0; i < $progress.length; i++) {
        name = $progress[i].getAttribute("id");
        $progress[i].classList.add(name);
      } 
    } else {
      for(let i = 0; i < $progress.length; i++) {
          name = $progress[i].getAttribute("id");
          $progress[i].classList.remove(name);
      }
    }
  }, false);
  

  // *** Skills section circle 클릭 시 내용 변경 ***
  const $percent = document.getElementsByClassName('percent');
  const $desc = document.querySelector('.desc');
  const bgTxt = document.querySelector('.bg-txt');
  const h2 = $desc.children[0];
  const p = $desc.children[1];


  // * 클릭한 circle 스타일 유지 + 나머지 circle 스타일 제거 *
  const showPercent = e => {
    if(!e.target.classList.contains('show')) {
      $percent[3].classList.remove('show');
    }
    for(let i = 0; i < $percent.length; i++) {
      $percent[i].classList.remove('show');
    }
    e.target.classList.add('show');
  }

  const init = () => {
    for(let i = 0; i < $percent.length; i++) {
      $percent[i].addEventListener('mouseover', showPercent);
    }
  }
  init();
  

  let skillData = [
    {
      bg: "HTML5",
      title: "HTML5",
      des: "HTML5의 웹 표준을 준수하여 웹 페이지를 제작할 수 있습니다. header, main, footer, aside, article 등의 시맨틱 태그를 구분하여 사용할 줄 알고, 이를 통해 웹 접근성을 높일 수 있습니다. HTML5, CSS3(SASS), JavaScript를 이용하여 반응형 웹 제작이 가능합니다."
    },
    {
      bg: "CSS3",
      title:"CSS3",
      des:"CSS3로 W3C에서 규정한 표준화된 규격에 따른 웹사이트를 제작할 수 있습니다. 웹 페이지를 기획하고 포토샵을 활용하여 디자인 시안을 만들고, 이를 소스로 구현할 수 있습니다. 레퍼런스를 참고해 애니메이션이나 반응형 웹을 만들 수 있습니다."
    },
    {
      bg: "SASS",
      title:"SASS",
      des:"SASS에 대한 기본 개념을 이해하고 있습니다. SASS(SCSS)를 활용하여 조별 프로젝트를 수행하였습니다. 리액트에서 SASS를 활용할 수 있습니다. 나아가 유지 보수성이 좋은 웹 사이트를 구축하는 데 SASS를 어떻게 사용할 수 있을지에 대해 고민하고 SASS의 문법을 더욱 잘 활용하기 위해 공부하고 있습니다."
    },
    {
      bg: "JAVASCRIPT",
      title:"자바스크립트",
      des:"Vanilla Javascript의 기본적인 활용이 가능합니다. 조건문의 종류를 알고 사용 방법을 이해합니다. for 반복문과 배열의 내장 함수을 활용할 줄 압니다. 원시값과 참조 복사를 이해하고 있으며 스프레드 연산자를 활용하여 데이터 불변성을 유지합니다. 로그인, 회원가입 및 유효성 검사 기능을 구현할 수 있습니다. 그 외에도 이벤트 리스너와 콜백 함수로 다양한 이벤트 구현이 가능합니다."
    },
    {
      bg: "REACT",
      title:"리액트",
      des:"hook, 리덕스, 라우팅의 개념을 알고 이를 이용한 기본적인 리액트 페이지 개발이 가능합니다. React.js의 공식 라이브러리 및 플러그인을 사용할 수 있으며 React 부트스트랩을 활용할 수 있습니다. React를 좀더 깊게 이해하고 사용하고자 지금도 계속 공부하고 있습니다."
    },
    {
      bg: "jQuery",
      title:"제이쿼리",
      des:"제이쿼리를 활용하여 기존 홈페이지의 페이지를 리뉴얼하는 첫 번째 개인 포트폴리오를 제작하였습니다. 이를 통해 제이쿼리 문법에 대해 알고 활용할 수 있게 되었습니다. 조별 프로젝트 시에는 자바스크립트와 더불어 제이쿼리 플러그인을 함께 활용하여 동적 인터페이스를 구현하였습니다."
    },
    {
      bg: "Bootstrap",
      title:"부트스트랩",
      des:"bootstrap에서 제공하고 있는 스타일 컴포넌트를 활용한 웹 제작이 가능합니다. 오픈 소스를 수정하여 더 나은 포맷을 만들 수 있습니다. 마찬가지로 React-bootstrap를 활용할 수 있습니다. "
    },
    {
      bg: "Photoshop",
      title:"포토샵",
      des:"포토샵을 이용하여 웹 페이지 시안 제작이 가능합니다. 포토샵 툴을 이용하여 사진을 편집할 수 있습니다. 그 밖에 색 보정, 명도 보정, 클리핑 마스크, 그라디언트 등의 기능을 활용할 수 있습니다."
    },
    {
      bg: "Illustrator",
      title:"일러스트레이터",
      des:"웹 페이지 제작에 필요한 로고 및 아이콘을 만들 수 있습니다. 기본적인 툴을 이해하고 사용할 수 있으며, 펜툴을 이용해 간단한 캐릭터 및 도형을 그릴 수 있습니다."
    },
    {
      bg: "Node.js",
      title:"노드 js",
      des:"Node.js를 이용하여 몽고DB에 GET, POST, DELETE, PUT 요청하는 방법을 익혔습니다. 이를 통해 ejs의 기본적인 사용법을 알게 되었습니다. Node.js가 Server Side JavaScript 플랫폼으로 각광받고 있는 만큼 Node.js를 활용한 DB 연동, 네트워크 통신과 웹 서버를 구현하는 방법 등을 앞으로도 꾸준히 학습할 것입니다."
    },
    {
      bg: "Git",
      title:"깃",
      des:"config, init, add, commit, pull, push 등 기본적인 깃 명령어를 이해하고 있으며 이를 Visual Studio Code에 연동할 수 있습니다. 팀 프로젝트 당시에는 Github를 이용하여 팀원들의 파일 및 작업을 조율하고 리드미를 작성했습니다."
    }
  ];

  for(let i = 0; i < $percent.length; i++) {
    $percent[i].addEventListener('mouseover', () => {
      bgTxt.innerText = skillData[i].bg;
      h2.innerText = skillData[i].title;
      p.innerText = skillData[i].des;
    }, false);
  }


  // *** Pf section 스크롤 감지 동영상 재생 ***
  const pfVds = document.querySelectorAll('.pf-video');

  const load = function() {
    let wH = window.innerHeight;    
    for(let i = 0; i < pfVds.length; i++) {
      let vdsTop = pfVds[i].getBoundingClientRect().top;
      if(vdsTop < wH) {
        pfVds[i].classList.add('scroll-fade-ts');
      } else {
        pfVds[i].classList.remove('scroll-fade-ts');
      }
    }
  };

  window.addEventListener('scroll', load);


  // *** Pf section 버튼 스타일 ***
  const $linkBtn = document.getElementsByClassName('link-btn');
  Array.from($linkBtn).forEach(linkBtn => {
    linkBtn.addEventListener('mouseover', () => {
      linkBtn.style.backgroundColor = '#e67e22';
      linkBtn.style.color = '#fff';
      linkBtn.style.transition = '280ms';
      
    });				

    linkBtn.addEventListener('mouseout', () => {
      linkBtn.style.backgroundColor = '';
      linkBtn.style.color = '';
    });
  });


  // *** Contact section emailJS 사용 ***
  const $name = document.getElementById('name');
  const $email = document.getElementById('email');
  const $message = document.getElementById('message');
  let $disabled = true;

  $email.addEventListener('change', (e) => {
    let pattern = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    console.log(pattern.test(e.target.value));
    
    if(pattern.test(e.target.value)) {
      $disabled = false;
    } else {
      $disabled = true;
    }
  }, false);

  const contactForm = document.getElementById('contactForm');
  const sendMail = e => {
    e.preventDefault();
    if($disabled == false){
      emailjs.init("-iRIVh8sK-2JKQLr0");
      let params = {
        name: $name.value,
        email: $email.value,
        message: $message.value
      };
      emailjs
      .send('service_t3b5ev2', 'template_f72hvwt', params)
      .then(function(res) {
        alert('소중한 의견 감사합니다. 빠른 피드백이 이루어질 수 있도록 노력하겠습니다.');
        $name.value = '';
        $email.value = '';
        $message.value = '';
      }, function(err) {
        alert('정상적으로 제출이 이루어지지 않았습니다. 다시 시도해주세요!')
      });
    }
    if($disabled == true) {
      alert('유효한 이메일 주소가 아닙니다. 다시 한번 확인 부탁드립니다.');
    }
  } // sendMail

  contactForm.addEventListener('submit', sendMail, false);
  
}