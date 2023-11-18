const boxes = document.querySelectorAll('.box');

window,addEventListener('scroll',checkBoxes);

checkBoxes;

function checkBoxes(){
    const triggerbottom = window.innerHeight /5 * 4;

    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerbottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const pop = document.getElementById("pop");

openBtn.addEventListener("click", () => {
    pop.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    pop.classList.remove("open");
});