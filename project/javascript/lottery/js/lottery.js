const $lottoDes = document.querySelector(".lotto_des");
const $publishInn = document.querySelector(".publish_inn");
const $raffleInn = document.querySelector(".raffle_inn");
const $paymentInn = document.querySelector(".payment_inn");
const $startBtn = document.querySelector(".start");
const $ball = document.querySelectorAll(".ball");
let tmp = 1, numbers;
let arr = [[], [], [], [], []];
let listIdx = 0;

window.onload = function() {
    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = ("0" + (today.getMonth() + 1)).slice(-2);
    let thisDate = ("0" + (today.getDate())).slice(-2);

    let sdd = "2020-05-30";
    let edd = thisYear + "-" + thisMonth + "-" + thisDate;

    let arr1 = sdd.split("-");
    let arr2 = edd.split("-");

    let day1 = new Date(arr1[0], arr1[1], arr1[2]);
    let day2 = new Date(arr2[0], arr2[1], arr2[2]);

    let diffDate = day2 - day1;
    let process = parseInt(diffDate / (1000 * 60 * 60 * 24))
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
    let publMinutes = ("0" + publToday.getMinutes()).slice(-2);  
    let publSeconds = ("0" + publToday.getSeconds()).slice(-2);

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


    function getindex(c) {
        let d = 0;
        for(d; c= c.previousElementSibling; d++);
        return d;
    }

    
    // * 시작 버튼 이벤트*
    $startBtn.addEventListener("click", () => {
        tmp === 1 && (
            tmp = 0,
            lottery(),
            setTimeout(function() {
                tmp = 1;
            }, 1000)
        );
    }, false);

    function lottery() {
        let random;
        listIdx = 0;

        for(let i = 0; i < 5; i++) {
            numbers = [1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
            for(let j = 0; j < 6; j++) {
                random = Math.floor(Math.random() * numbers.length);
                arr[i][j] = numbers[random];
                numbers.splice(random, 1);
            }
        
            let h, t, idx;
            let $tmp;
            for(h = 0; h < 5; h++) {
                idx = h;
                for(t = h+1; t < 6; t++) {
                    if(arr[i][idx] > arr[i][t]) idx = t; 
                }
                $tmp = arr[i][h];
                arr[i][h] = arr[i][idx];
                arr[i][idx] = $tmp;
            }
        } // for

        Array.from($ball).forEach(x => {
            decodeEffect(x, getindex(x));
        });
    } // lottery
    
    function decodeEffect(e, time) {
        e.innerText = arr[listIdx][time-2];
        if(time === 7) {
            listIdx++;
        }
    }
} 