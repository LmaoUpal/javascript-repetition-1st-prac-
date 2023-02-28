const radio = document.querySelectorAll(".interests");
const artQuestions = document.querySelectorAll(".art");
const itQuestions = document.querySelectorAll(".it");

function changeQuest() {
    if (radio[0].checked) {
        for (let i = 0; i < artQuestions.length; i++) {
            artQuestions[i].style.display = "block";
        }
        for (let i = 0; i < itQuestions.length; i++) {
            itQuestions[i].style.display = "none";
        }
    } else if (radio[1].checked) {
        for (let i = 0; i < itQuestions.length; i++) {
            itQuestions[i].style.display = "block";
        }
        for (let i = 0; i < artQuestions.length; i++) {
            artQuestions[i].style.display = "none";
        }
    }
}

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("change", changeQuest);
}

// call changeQuest function to set initial state
changeQuest();

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("click", changeQuest);
}

const submitBtn = document.getElementById('submit-btn');

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', function () {
        if (document.querySelector('.interests:checked')) {
            submitBtn.classList.remove('d-none');
        }
    });
}
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (radio[0].checked) {
        let rek = 0, diz = 0, tv = 0;
        let art1 = document.getElementsByName("art1");
        if (art1[0].checked) {
            rek++;
            diz++;
            tv++
        }
        if (art1[1].checked) {
            rek++;
            diz++;
            tv++
        }
        if (art1[2].checked) {
            diz++;
            tv++
        }
        if (art1[3].checked) rek += 2;
        if (document.getElementsByName("art2")[0].checked) diz += 2;
        if (document.getElementsByName("art3")[0].checked) {
            tv += 2;
            rek++
        }
        if (document.getElementsByName("art4")[0].checked) rek += 2;
        let art5 = document.getElementsByName("art5");
        if (art5[0].checked) diz += 2;
        if (art5[1].checked) rek += 2;
        if (art5[2].checked) tv += 2;
        if (art5[3].checked) {
            tv += 2;
            rek++
        }
        if (art5[4].checked) {
            diz += 2;
            rek++
        }
        if (document.getElementsByName("art6")[1].checked) rek += 2;
        if (document.getElementsByName("art6")[2].checked) diz += 2;
        var result = document.getElementById('result');
        console.log(rek);
        console.log(diz);
        console.log(tv);
        if (rek == 0 && diz == 0 && tv == 0) result.innerHTML = "<p>Вы ничего не выбрали</p>"
        else if (rek <= 3 && diz <= 3 && tv <= 3) result.innerHTML = "<p>Вы дали мало ответов для определения профиля</p>"
        else if (rek >= diz && rek >= tv) result.innerHTML = "<p>Ваш выбор - реклама и связь с общественностью</p>"
        else if (diz >= tv) result.innerHTML = "<p>Ваш выбор - дизайн</p>"
        else result.innerHTML = "<p>Ваш выбор - телевидение</p>"
    } else {
        let ifst = 0, pinf = 0, pinj = 0, ivcht = 0;
        if (document.getElementsByName("it1")[0].checked) ifst += 2;
        if (document.getElementsByName("it1")[1].checked) ifst--;
        if (document.getElementsByName("it2")[0].checked) {
            ifst++;
            pinf++
        }
        if (document.getElementsByName("it2")[1].checked) pinj += 2;
        if (document.getElementsByName("it3")[0].checked) pinf += 2;
        if (document.getElementsByName("it3")[1].checked) pinf--;
        if (document.getElementsByName("it4")[0].checked) ivcht += 2;
        if (document.getElementsByName("it4")[1].checked) ivcht--;
        let it5 = document.getElementsByName("it5");
        if (it5[0].checked) ifst += 2;
        if (it5[1].checked) pinj += 2;
        if (it5[2].checked) ivcht += 2;
        if (it5[3].checked) pinf += 2;
        if (document.getElementsByName("it6")[0].checked) {
            ifst++;
            ivcht++
        }
        var result = document.getElementById('result');
        console.log(ifst);
        console.log(pinf);
        console.log(pinj);
        console.log(ivcht);
        if (ifst == 0 && pinf == 0 && pinj == 0 && ivcht == 0) result.innerHTML = "<p>Вы ничего не выбрали</p>"
        else if (ifst < 3 && pinf < 3 && pinj < 3 && ivcht < 3) result.innerHTML = "<p>Вы дали мало ответов для определения профиля</p>"
        else if (ifst >= pinj && ifst >= pinf && ifst >= ivcht) result.innerHTML = "<p>Ваш выбор - ИФСТ (Информационные системы и технологии)</p>"
        else if (pinf >= pinj && pinf >= ivcht) result.innerHTML = "<p>Ваш выбор - ПИНФ (Прикладная информатика)</p>"
        else if (pinj >= ivcht) result.innerHTML = "<p>Ваш выбор - ПИНЖ (Программная инженерия)</p>"
        else result.innerHTML = "<p>Ваш выбор - ИВЧТ (Информатика и вычислительная техника)</p>"
    }
});

function showTest() {
    var form = document.getElementById("test-form");
    form.style.display = "block";
}