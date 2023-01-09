window.onload = function() {
    const aMatrix = document.getElementsByClassName("go").item(0);
    const bMatrix = document.getElementsByClassName("go").item(1);
    const aBoxRow = document.getElementById("aBoxRow");
    const aBoxCol = document.getElementById("aBoxCol");
    const bBoxRow = document.getElementById("bBoxRow");
    const bBoxCol = document.getElementById("bBoxCol");
    const outputA = document.querySelector(".outputA");
    const outputB = document.querySelector(".outputB");
    const plusBtn = document.querySelector(".plusBtn");
    const minusBtn = document.querySelector(".minusBtn");
    const multiplyBtn = document.querySelector(".multiplyBtn");
    const outputAB = document.querySelector(".outputAB");
    const randomBtn = document.querySelector(".randomBtn");
    const clearBtn = document.querySelector(".clearBtn");
    const allOneBtn = document.querySelector(".allOneBtn");
    const location = document.querySelector(".outputBoxWrap").offsetTop;

    /* A 행렬 박스 만들기 */
    let aCol = 0;
    let aRow = 0;

    aMatrix.addEventListener("click", () => {
        aRow = aBoxRow.value;
        aCol = aBoxCol.value;
        
        if(aRow === "") {
            alert("A의 행을 입력하세요.");
            return false;
        }
        
        if(aCol === "") {
            alert("A의 열을 입력하세요.");
            return false;
        }
        
        let aTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            aTableStr += "<tr>";
            for(let j = 0; j < aRow; j++) {
                aTableStr += `<td><input class='aInputClass' id='aNumber${i}${j}' type ='text' maxlength='4' min='0' max='100' step='1' oninput= \"this.value = this.value.replace(/[^0-9.]/g, '');\"></td>`;
            }
            aTableStr += "</tr>";
        }
        aTableStr += "</table>";
        outputA.innerHTML = aTableStr;
    }, false);

    /* B 행렬 박스 만들기 */
    let bCol = 0;
    let bRow = 0;

    bMatrix.addEventListener("click", () => {
        bRow = bBoxRow.value;
        bCol = bBoxCol.value;
        
        if(bRow === "") {
            alert("B의 행을 입력하세요.");
            return false;
        }
        
        if(bCol === "") {
            alert("B의 열을 입력하세요.");
            return false;
        }
        
        let bTableStr = "<table>";
        for(let i = 0; i < bCol; i++) {
            bTableStr += "<tr>";
            for(let j = 0; j < bRow; j++) {
                bTableStr += `<td><input class='bInputClass' id='bNumber${i}${j}' type ='text' maxlength='4' min='0' max='100' step='1' oninput= \"this.value = this.value.replace(/[^0-9.]/g, '');\"></td>`;
            }
            bTableStr += "</tr>";
        }
        bTableStr += "</table>";
        outputB.innerHTML = bTableStr;
    }, false);

    /* 더하기 */
    plusBtn.addEventListener("click", () => {
        if(aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            alert("A와 B의 행과 열을 생성하세요.");
            return false;
        }
        
        if(aCol !== bCol || aRow !== bRow) {
            alert("A와 B의 행과 열을 같게 입력하세요.");
            return false;
        }
        
        let num = "";
        let answer = "";
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < bRow; j++) {
                if(document.getElementById(`bNumber${i}${j}`).value == "" || document.getElementById(`aNumber${i}${j}`).value == "") {
                    alert("빈 값을 입력해주세요.");
                    return false;
                } else {
                    abTableStr += "<td><span class='abInputClass'>";
                    abTableStr += (Number(document.getElementById(`aNumber${i}${j}`).value)) + (Number(document.getElementById(`bNumber${i}${j}`).value));
                    abTableStr += "</td>";
                }
            }
            abTableStr += "<tr>";
        }
        abTableStr += "</table>";
        num = abTableStr;
        answer = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        outputAB.innerHTML = answer;
        outputAB.value = "";

        window.scrollTo({top:location, behavior: 'smooth'});
    }, false);

    /* 빼기 */
    minusBtn.addEventListener("click", () => {
        if(aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            alert("A와 B의 행과 열을 생성하세요.");
            return false;
        }
        
        if(aCol !== bCol || aRow !== bRow) {
            alert("A와 B의 행과 열을 같게 입력하세요.");
            return false;
        }

        let num = "";
        let answer = "";
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < bRow; j++) {
                if(document.getElementById(`bNumber${i}${j}`).value == "" || document.getElementById(`aNumber${i}${j}`).value == "") {
                    alert("빈 값을 입력해주세요.");
                    return false;
                } else {
                    abTableStr += "<td><span class='abInputClass'>";
                    abTableStr += (Number(document.getElementById(`aNumber${i}${j}`).value)) - (Number(document.getElementById(`bNumber${i}${j}`).value));
                    abTableStr += "</span></td>";
                }
            }
            abTableStr += "<tr>";
        }
        abTableStr += "</table>";
        num = abTableStr;
        answer = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        outputAB.innerHTML = answer;
        outputAB.value = "";

        window.scrollTo({top:location, behavior: 'smooth'});
    }, false);

    /* 곱하기 */
    multiplyBtn.addEventListener("click", () => {
        if(aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            alert("A와 B의 행과 열을 생성하세요.");
            return false;
        }
        
        if(aCol !== bCol || aRow !== bRow) {
            alert("A와 B의 행과 열을 같게 입력하세요.");
            return false;
        }

        let num = "";
        let answer = "";
        let answer2 = 0;
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < bRow; j++) {
                abTableStr += "<td><span class='abInputClass'>";
                for(let k = 0; k < aRow; k++) {
                    if(document.getElementById(`bNumber${i}${j}`).value == "" || document.getElementById(`aNumber${i}${j}`).value == "") {
                        alert("빈 값을 입력해주세요.");
                        return false;
                    }  else {
                        answer2 += (Number(document.getElementById(`aNumber${i}${k}`).value)) * (Number(document.getElementById(`bNumber${k}${j}`).value));
                    }
                } 
                abTableStr += answer2;
                answer2 = 0;
                abTableStr += "</span></td>";
            }
            abTableStr += "<tr>";
        }
        abTableStr += "</table>";
        num = abTableStr;
        answer = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        outputAB.innerHTML = answer;
        outputAB.value = "";

        window.scrollTo({top:location, behavior: 'smooth'});
    }, false);

    /* 랜덤 버튼 */
    randomBtn.addEventListener("click", () => {
        if(aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            alert("A와 B의 행과 열을 생성하세요.");
            return false;
        }

        // A 행렬 랜덤
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < aRow; j++) {
                abTableStr += "<td><span class='abInputClass'>";
                abTableStr += Number(document.getElementById(`aNumber${i}${j}`).value = Math.floor(Math.random() * 50));
                abTableStr += "</span></td>";
            }
            abTableStr += "</tr>";
        }
        abTableStr += "</table>";
        
        // B 행렬 랜덤
        let abTableStr2 = "<table>";
        for(let i = 0; i < bCol; i++) {
            abTableStr2 += "<tr>";
            for(let j = 0; j < bRow; j++) {
                abTableStr2 += "<td><span class='abInputClass'>";
                abTableStr2 += Number(document.getElementById(`bNumber${i}${j}`).value = Math.floor(Math.random() * 50));
                abTableStr2 += "</span></td>";
            }
            abTableStr2 += "</tr>";
        }
        abTableStr2 += "</table>";
    }, false);

    /* 클리어 버튼 */
    clearBtn.addEventListener("click", () => {
        if(aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            alert("A와 B의 행과 열을 생성하세요.");
            return false;
        }

        // A 행렬 랜덤
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < aRow; j++) {
                abTableStr += "<td><span class='abInputClass'>";
                abTableStr += Number(document.getElementById(`aNumber${i}${j}`).value = '');
                abTableStr += "</span></td>";
            }
            abTableStr += "</tr>";
        }
        abTableStr += "</table>";
        
        // B 행렬 랜덤
        let abTableStr2 = "<table>";
        for(let i = 0; i < bCol; i++) {
            abTableStr2 += "<tr>";
            for(let j = 0; j < bRow; j++) {
                abTableStr2 += "<td><span class='abInputClass'>";
                abTableStr2 += Number(document.getElementById(`bNumber${i}${j}`).value = '');
                abTableStr2 += "</span></td>";
            }
            abTableStr2 += "</tr>";
        }
        abTableStr2 += "</table>";
    }, false);

    /* all one 버튼 */
    allOneBtn.addEventListener("click", () => {
        if(aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            alert("A와 B의 행과 열을 생성하세요.");
            return false;
        }

        // A 행렬 랜덤
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < aRow; j++) {
                abTableStr += "<td><span class='abInputClass'>";
                abTableStr += Number(document.getElementById(`aNumber${i}${j}`).value = 1);
                abTableStr += "</span></td>";
            }
            abTableStr += "</tr>";
        }
        abTableStr += "</table>";
        
        // B 행렬 랜덤
        let abTableStr2 = "<table>";
        for(let i = 0; i < bCol; i++) {
            abTableStr2 += "<tr>";
            for(let j = 0; j < bRow; j++) {
                abTableStr2 += "<td><span class='abInputClass'>";
                abTableStr2 += Number(document.getElementById(`bNumber${i}${j}`).value = 1);
                abTableStr2 += "</span></td>";
            }
            abTableStr2 += "</tr>";
        }
        abTableStr2 += "</table>";
    }, false);
}