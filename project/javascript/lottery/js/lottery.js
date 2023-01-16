const $lottoDes = document.querySelector(".lotto_des");
const $publishInn = document.querySelector(".publish_inn");
const $raffleInn = document.querySelector(".raffle_inn");
const $paymentInn = document.querySelector(".payment_inn");
const $startBtn = document.querySelector(".start");
const ball = document.getElementsByClassName("ball");

window.onload = function() {
    // * 제 N 회*
    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = ("0" + (today.getMonth() + 1)).slice(-2); // 01~12 추출
    let thisDate = ("0" + (today.getDate())).slice(-2); // 01~31 추출

    let sdd = "2020-05-30";
    let edd = thisYear + "-" + thisMonth + "-" + thisDate;

    let arr1 = sdd.split("-");
    let arr2 = edd.split("-");

    let day1 = new Date(arr1[0], arr1[1], arr1[2]);
    let day2 = new Date(arr2[0], arr2[1], arr2[2]);

    let diffDate = day2 - day1;
    let process = parseInt(diffDate / (1000 * 60 * 60 * 24)); // 958
    let result = Math.floor(process / 7) + 914;
    console.log(result);

    $lottoDes.innerText = '제' + result + '회';


    // * 발행일 *
    let publToday = new Date();
    let publYear = publToday.getFullYear();
    let publMonth = ("0" + (publToday.getMonth() + 1)).slice(-2);
    let publDate = ("0" + publToday.getDate()).slice(-2);
    
    let publDayArr = ['일', '월', '화', '수', '목', '금', '토'];
    let publDay = publToday.getDay();
    
    let publHours = publToday.getHours();
    let publMinutes = ("0" + publToday.getMinutes()).slice(-2); // 00~60분
    let publSeconds = ("0" + publToday.getSeconds()).slice(-2); // 00~60초

    let publTxt = `${publYear}/${publMonth}/${publDate}(${publDayArr[publDay]}) ${publHours}:${publMinutes}:${publSeconds}`;

    $publishInn.innerText = publTxt;

    // * 추첨일 *
    let raffleAdd = (Math.floor(process / 7) + 1) * 7;

    let raffleAddDate = new Date(2020, 4, 30);
    raffleAddDate.setDate(raffleAddDate.getDate() + raffleAdd);

    let raffleYear = raffleAddDate.getFullYear();
    let raffleMonth = ("0" + (raffleAddDate.getMonth() + 1)).slice(-2);
    let raffleDate = ("0" + raffleAddDate.getDate()).slice(-2);

    let raffleDayArr = ['일', '월', '화', '수', '목', '금', '토'];
    let raffleDay = raffleAddDate.getDay();

    let raffleTxt = `${raffleYear}/${raffleMonth}/${raffleDate}(${raffleDayArr[raffleDay]})`;
    console.log(raffleTxt);

    $raffleInn.innerText = raffleTxt;


    // * 지급기한 *
    let payAddDate = new Date();
    payAddDate.setDate(raffleAddDate.getDate() + 366);

    let payYear = payAddDate.getFullYear();
    let payMonth = ("0" + (payAddDate.getMonth() + 1)).slice(-2);
    let payDate = ("0" + payAddDate.getDate()).slice(-2);

    let payTxt = `${payYear}/${payMonth}/${payDate}`;

    $paymentInn.innerText = payTxt;


    // * 로또번호 랜덤 생성*
    $startBtn.addEventListener("click", () => {
        for(let i = 0; i < 5; i++) {
            ball[i].innerHTML = generate();
        }
    }, false);

    function generate() {
        let answer = [];

        for (let i = 0; i < 6; i++){
            let check = false;
            while (check == false){
                let randNum = Math.floor(Math.random() * 45) + 1;
                if (answer.includes(randNum) == false){
                    answer.push(randNum);
                    check = true;
                }
            }
        }
        
        answer.sort(function(a, b){
            return a - b;
        });
        
        return answer.join(', ');
    } // generate
}