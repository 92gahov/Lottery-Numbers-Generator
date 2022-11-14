let columnNums = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0
};

let firstNumbers = document.querySelectorAll(".f-col-nums");
let secondNumbers = document.querySelectorAll(".s-col-nums");
let thirdNumbers = document.querySelectorAll(".t-col-nums");
let fourthNumbers = document.querySelectorAll(".ff-col-nums");

function generateNumbers() {
    columnNums.first = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
    columnNums.second = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
    columnNums.third = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
    columnNums.fourth = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
    columnNums.fifth = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
    columnNums.sixth = Math.floor(Math.random() * (49 - 1 + 1)) + 1;

    if (columnNums.first == columnNums.second ||
        columnNums.first == columnNums.third ||
        columnNums.first == columnNums.fourth ||
        columnNums.first == columnNums.fifth ||
        columnNums.first == columnNums.sixth ||
        columnNums.second == columnNums.first ||
        columnNums.second == columnNums.third ||
        columnNums.second == columnNums.fourth ||
        columnNums.second == columnNums.fifth ||
        columnNums.second == columnNums.sixth ||
        columnNums.third == columnNums.first ||
        columnNums.third == columnNums.second ||
        columnNums.third == columnNums.fourth ||
        columnNums.third == columnNums.fifth ||
        columnNums.third == columnNums.sixth ||
        columnNums.fourth == columnNums.first ||
        columnNums.fourth == columnNums.second ||
        columnNums.fourth == columnNums.third ||
        columnNums.fourth == columnNums.fifth ||
        columnNums.fourth == columnNums.sixth ||
        columnNums.fifth == columnNums.first ||
        columnNums.fifth == columnNums.second ||
        columnNums.fifth == columnNums.third ||
        columnNums.fifth == columnNums.fourth ||
        columnNums.fifth == columnNums.sixth ||
        columnNums.sixth == columnNums.first ||
        columnNums.sixth == columnNums.second ||
        columnNums.sixth == columnNums.third ||
        columnNums.sixth == columnNums.fourth ||
        columnNums.sixth == columnNums.fifth) {
        generateNumbers();
    }
};

function displayFirstNumbers() {
    for (let i = 0; i < firstNumbers.length; i++) {
        firstNumbers[i].classList.remove("cross");
    };

    for (let i = 0; i < firstNumbers.length; i++) {
        if (firstNumbers[i].innerText == columnNums.first) {
            firstNumbers[i].classList.add("cross");
        } else if (firstNumbers[i].innerText == columnNums.second) {
            firstNumbers[i].classList.add("cross");
        } else if (firstNumbers[i].innerText == columnNums.third) {
            firstNumbers[i].classList.add("cross");
        } else if (firstNumbers[i].innerText == columnNums.fourth) {
            firstNumbers[i].classList.add("cross");
        } else if (firstNumbers[i].innerText == columnNums.fifth) {
            firstNumbers[i].classList.add("cross");
        } else if (firstNumbers[i].innerText == columnNums.sixth) {
            firstNumbers[i].classList.add("cross");
        }
    };
};

function displaySecondNumbers() {
    for (let i = 0; i < secondNumbers.length; i++) {
        secondNumbers[i].classList.remove("cross");
    };

    for (let i = 0; i < secondNumbers.length; i++) {
        if (secondNumbers[i].innerText == columnNums.first) {
            secondNumbers[i].classList.add("cross");
        } else if (secondNumbers[i].innerText == columnNums.second) {
            secondNumbers[i].classList.add("cross");
        } else if (secondNumbers[i].innerText == columnNums.third) {
            secondNumbers[i].classList.add("cross");
        } else if (secondNumbers[i].innerText == columnNums.fourth) {
            secondNumbers[i].classList.add("cross");
        } else if (secondNumbers[i].innerText == columnNums.fifth) {
            secondNumbers[i].classList.add("cross");
        } else if (secondNumbers[i].innerText == columnNums.sixth) {
            secondNumbers[i].classList.add("cross");
        }
    };
};

function displayThirdNumbers() {
    for (let i = 0; i < thirdNumbers.length; i++) {
        thirdNumbers[i].classList.remove("cross");
    };

    for (let i = 0; i < thirdNumbers.length; i++) {
        if (thirdNumbers[i].innerText == columnNums.first) {
            thirdNumbers[i].classList.add("cross");
        } else if (thirdNumbers[i].innerText == columnNums.second) {
            thirdNumbers[i].classList.add("cross");
        } else if (thirdNumbers[i].innerText == columnNums.third) {
            thirdNumbers[i].classList.add("cross");
        } else if (thirdNumbers[i].innerText == columnNums.fourth) {
            thirdNumbers[i].classList.add("cross");
        } else if (thirdNumbers[i].innerText == columnNums.fifth) {
            thirdNumbers[i].classList.add("cross");
        } else if (thirdNumbers[i].innerText == columnNums.sixth) {
            thirdNumbers[i].classList.add("cross");
        }
    };
};

function displayFourthNumbers() {
    for (let i = 0; i < fourthNumbers.length; i++) {
        fourthNumbers[i].classList.remove("cross");
    };

    for (let i = 0; i < fourthNumbers.length; i++) {
        if (fourthNumbers[i].innerText == columnNums.first) {
            fourthNumbers[i].classList.add("cross");
        } else if (fourthNumbers[i].innerText == columnNums.second) {
            fourthNumbers[i].classList.add("cross");
        } else if (fourthNumbers[i].innerText == columnNums.third) {
            fourthNumbers[i].classList.add("cross");
        } else if (fourthNumbers[i].innerText == columnNums.fourth) {
            fourthNumbers[i].classList.add("cross");
        } else if (fourthNumbers[i].innerText == columnNums.fifth) {
            fourthNumbers[i].classList.add("cross");
        } else if (fourthNumbers[i].innerText == columnNums.sixth) {
            fourthNumbers[i].classList.add("cross");
        }
    };
};

document.getElementById("f-col-btn").addEventListener("click", () => {
    generateNumbers();
    displayFirstNumbers();
});

document.getElementById("s-col-btn").addEventListener("click", () => {
    generateNumbers();
    displaySecondNumbers();
});

document.getElementById("t-col-btn").addEventListener("click", () => {
    generateNumbers();
    displayThirdNumbers();
});

document.getElementById("ff-col-btn").addEventListener("click", () => {
    generateNumbers();
    displayFourthNumbers();
});