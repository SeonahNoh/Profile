window.onload = function() {
    // ##### 헤더 드롭다운 풀메뉴 #####
    $(function() {
        $('.gnb > li').mouseenter(function(){
            $('.mainmenu-box').stop().animate({height:'300px'});
        });

        $('.gnb > li').mouseleave(function(){
            $('.mainmenu-box').stop().animate({height:'100px'});
        })
    });

    // ##### 헤더 스크롤 시 메뉴 스타일 변경 #####
    $(window).on('scroll', function() {
        if($(window).scrollTop() >= 150) {
            $('.main-logo-menu').addClass('scroll-down');
            $('.lnb').addClass('scroll-down');
            $('.lnb li > a').addClass('scroll-down');
            $('.gnb li > a span').addClass('change-color');
        } else {
            $('.main-logo-menu').removeClass('scroll-down');
            $('.main-logo-menu').addClass('scroll-up');
            $('.lnb').removeClass('scroll-down');
            $('.lnb li > a').removeClass('scroll-down');
            $('.gnb li > a span').removeClass('change-color');
        }
    });


    // ##### 메인 tower-restaurant-gift 버튼 클릭 시 텍스트 변경 ##### 
    const towerBtn = document.getElementById("tower-btn");
    const restaurantBtn = document.getElementById("restaurant-btn");
    const giftBtn = document.getElementById("gift-btn");
    const slideTitle = document.getElementById("slide-title");
    const slideContents = document.getElementById("slide-contents");
    const goReserve = document.getElementById("go-reserve");

    towerBtn.addEventListener('click', () => {
        slideTitle.innerHTML = "N서울타워 전망대";
        slideContents.innerHTML = "남산(262m) 정상에 위치한 N서울타워에서는<br>해발 480m 위치에서 서울시를 <br>360도 파노라마 뷰로 조망할 수 있습니다. <br>서울의 도심 전경과 아름다운 야경을 한눈에 즐기세요!";
        goReserve.innerHTML = "지금 예약하러 가기";
    }, false);

    restaurantBtn.addEventListener('click', () => {
        slideTitle.innerHTML = "HAN Cook 레스토랑";
        slideContents.innerHTML = "해발 400M 남산에서 즐기는<br>풍미절정 모던 한우 그릴<br>HAN Cook Korean grill&dine<br>2022년 7월 1일 그랜드 오픈을 놓치지 마세요!";
        goReserve.innerHTML = "지금 예약하러 가기";
    }, false);

    giftBtn.addEventListener('click', () => {
        slideTitle.innerHTML = "N GIFT";
        slideContents.innerHTML = "N서울타워와 서울, 한국을 추억할 수 있는<br>관광 상품과 커플 아이템, 트랜디한 기념품까지<br>다양한 테마로 구성된 N GIFT에서<br>N서울타워의 추억을 간직하세요.";
        goReserve.innerHTML = "지금 구매하러 가기";
    }, false);


    // ##### 메인 tower-restaurant-gift 버튼 클릭 시 이미지 변경 #####
    $(function(){
        $('#tower-btn').click(function() {
            $('#slide-img2').addClass('inactive');
            $('#slide-img3').addClass('inactive');

        });

        $('#restaurant-btn').click(function() {
            $('#slide-img2').addClass('active');
            $('#slide-img2').removeClass('inactive');
            $('#slide-img3').addClass('inactive');
        });

        $('#gift-btn').click(function() {
            $('#slide-img2').addClass('active');
            $('#slide-img2').removeClass('inactive');
            $('#slide-img3').addClass('active');
            $('#slide-img3').removeClass('inactive');
        });
    });
}