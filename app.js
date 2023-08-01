const button1 = document.getElementById('click1');
const answerElement = document.getElementById('answer1');
function toggleText1() {
    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
        button1.textContent = 'Скрыть ответ';
    }else{
        answerElement.style.display = 'none';
        button1.textContent = 'Показать ответ';
    }
}

button1.addEventListener('click', toggleText1);

const button2 = document.getElementById('click2');
const answerElement2 = document.getElementById('answer2');
function toggleText2() {
    if (answerElement2.style.display === 'none') {
        answerElement2.style.display = 'block';
        button2.textContent = 'Скрыть ответ';
    }else{
        answerElement2.style.display = 'none';
        button2.textContent = 'Показать ответ';
    }
}

button2.addEventListener('click', toggleText2);

const button3 = document.getElementById('click3');
const answerElement3 = document.getElementById('answer3');
function toggleText3() {
    if (answerElement3.style.display === 'none') {
        answerElement3.style.display = 'block';
        button3.textContent = 'Скрыть ответ';
    }else{
        answerElement3.style.display = 'none';
        button3.textContent = 'Показать ответ';
    }
}

button3.addEventListener('click', toggleText3);

const button4 = document.getElementById('click4');
const answerElement4 = document.getElementById('answer4');
function toggleText4() {
    if (answerElement4.style.display === 'none') {
        answerElement4.style.display = 'block';
        button4.textContent = 'Скрыть ответ';
    }else{
        answerElement4.style.display = 'none';
        button4.textContent = 'Показать ответ';
    }
}

button4.addEventListener('click', toggleText4);

const button5 = document.getElementById('click5');
const answerElement5 = document.getElementById('answer5');
function toggleText5() {
    if (answerElement5.style.display === 'none') {
        answerElement5.style.display = 'block';
        button5.textContent = 'Скрыть ответ';
    }else{
        answerElement5.style.display = 'none';
        button5.textContent = 'Показать ответ';
    }
}

button5.addEventListener('click', toggleText5);

const button6 = document.getElementById('click6');
const answerElement6 = document.getElementById('answer6');
function toggleText6() {
    if (answerElement6.style.display === 'none') {
        answerElement6.style.display = 'block';
        button6.textContent = 'Скрыть ответ';
    }else{
        answerElement6.style.display = 'none';
        button6.textContent = 'Показать ответ';
    }
}

button6.addEventListener('click', toggleText6);
