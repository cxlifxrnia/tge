var answerCount = 0;
var expectedQuestion1 = "Кто бмж люти?"; // Текст первого ожидаемого вопроса
var expectedQuestion2 = "Нахабино"; // Текст второго ожидаемого вопроса

function typeAndEraseText(targetElement, text, speed) {
    var i = 0;
    var isErasing = false;

    function type() {
        targetElement.innerText += text.charAt(i);
        i++;

        if (i === text.length) {
            isErasing = true;
            setTimeout(erase, 1000);
        } else {
            setTimeout(type, speed);
        }
    }

    function erase() {
        var currentText = targetElement.innerText;
        currentText = currentText.slice(0, -1);
        targetElement.innerText = currentText;

        if (currentText === "") {
            isErasing = false;
            setTimeout(function() {
                targetElement.innerText = "";
                typeAndEraseText(targetElement, "В нахабино сегодня хз", speed);
            }, 1000);
        } else {
            setTimeout(erase, speed / 2);
        }
    }

    type();
}

function getAnswer() {
    var question = document.getElementById("question").value.trim().toLowerCase();
    var answerElement = document.getElementById("answer");
    answerElement.innerText = "";

    if (
        (question === expectedQuestion1.toLowerCase() && answerCount < 2) ||
        (question === expectedQuestion2.toLowerCase())
    ) {
        // Простейший пример ответа на вопрос
        var answer;

        if (question === expectedQuestion1.toLowerCase()) {
            answer = "Вы Владимир, бмж люти узб чотки бмж";
        } else if (question === expectedQuestion2.toLowerCase()) {
            answer = "Сегодня в 6 не получится, максимум в 9-10, есть дела лютие про тглтн берил 8х";
        }

        typeAndEraseText(answerElement, answer, 50);
        answerCount++;
    }
}