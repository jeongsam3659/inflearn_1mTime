//  selector
const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

// function
function calculator() {
    // input
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    const timeValue_int = Number(timeValue.value);

    // result
    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    // 빈칸일시.
    if (fieldValue.value == "") {
        alert("분야 입력되어있지 않습니다.");
        fieldValue.focus();
        return false;
    } else if (timeValue.value == "") {
        alert("시간 입력되어있지 않습니다.");
        timeValue.focus;
        return false;
    } else if (timeValue_int > 24) {
        alert("잘못된 값이입니다. 24이하의 값을 입력해주세요.");
        return false;
    }
    // 정상작동시
    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function () {
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt(10000 / timeValue_int, 10);
        // 텍스트를 넣는다.
        //  parseInt 소수점 x , 나눈값을 10진수로 표시
        loading.style.display = "none";
        result.style.display = "flex";
    }, 1800);
    // 1.8s
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// 윈도우 창을 클릭시 창을 닫히게 하기
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement("input");

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}

// 실행js
shareButton.addEventListener("click", copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);
