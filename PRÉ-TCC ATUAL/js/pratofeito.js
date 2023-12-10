const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');

    // Muda o ícone do menu entre barras e "X"
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('ativo');
    });
});


const checklist = document.getElementById("checklist");
const checklistOptions = document.getElementById("checklist-options");
const checklistOptions2 = document.getElementById("checklist-options2");
const checklistOptions3 = document.getElementById("checklist-options3");
const checklistOptions4 = document.getElementById("checklist-options4");
const checklist2 = document.getElementById("checklist2");
const checklistOptions5 = document.getElementById("checklist-options5");
const checklistOptions6 = document.getElementById("checklist-options6");
const checklistOptions7 = document.getElementById("checklist-options7");
const checklistOptions8 = document.getElementById("checklist-options8");
const checklist3 = document.getElementById("checklist3");
const checklistOptions9 = document.getElementById("checklist-options9");
const checklistOptions10 = document.getElementById("checklist-options10");
const checklistOptions11 = document.getElementById("checklist-options11");
const checklistOptions12 = document.getElementById("checklist-options12");

checklist.addEventListener("change", function () {
    const selectedOption = checklist.value;
    checklistOptions.style.display = "none";
    checklistOptions2.style.display = "none";
    checklistOptions3.style.display = "none";
    checklistOptions4.style.display = "none";

    if (selectedOption === "1") {
        checklistOptions.style.display = "block";
    } else if (selectedOption === "2") {
        checklistOptions2.style.display = "block";
    } else if (selectedOption === "3") {
        checklistOptions3.style.display = "block";
    } else if (selectedOption === "4") {
        checklistOptions4.style.display = "block";
    }
});

checklist2.addEventListener("change", function () {
    const selectedOption = checklist2.value;
    checklistOptions5.style.display = "none";
    checklistOptions6.style.display = "none";
    checklistOptions7.style.display = "none";
    checklistOptions8.style.display = "none";

    if (selectedOption === "1") {
        checklistOptions5.style.display = "block";
    } else if (selectedOption === "2") {
        checklistOptions6.style.display = "block";
    } else if (selectedOption === "3") {
        checklistOptions7.style.display = "block";
    } else if (selectedOption === "4") {
        checklistOptions8.style.display = "block";
    }
});

checklist3.addEventListener("change", function () {
    const selectedOption = checklist3.value;
    checklistOptions9.style.display = "none";
    checklistOptions10.style.display = "none";
    checklistOptions11.style.display = "none";
    checklistOptions12.style.display = "none";

    if (selectedOption === "1") {
        checklistOptions9.style.display = "block";
    } else if (selectedOption === "2") {
        checklistOptions10.style.display = "block";
    } else if (selectedOption === "3") {
        checklistOptions11.style.display = "block";
    } else if (selectedOption === "4") {
        checklistOptions12.style.display = "block";
    }
});
