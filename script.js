let myBorder = document.querySelectorAll('.cadre');
let myCercle = document.querySelectorAll('.cercle');
let prevBtn = document.querySelector('button:first-of-type');
let nextBtn = document.querySelector('button:nth-of-type(2)');
let i = 0;



function next() {  
    myBorder[i].classList.add('animated');
    i++;
    myCercle[i].classList.add('border-act');
    
    if (i <= 0) {
        prevBtn.setAttribute('disabled', "disabled");
        nextBtn.removeAttribute('disabled');
    } else if (i > 0 && i < 3) {
        prevBtn.removeAttribute('disabled');
        nextBtn.removeAttribute('disabled');
    } else {
        prevBtn.removeAttribute('disabled');
        nextBtn.setAttribute('disabled', "disabled");
    };
    console.log(i);
};


function prev() {

    myCercle[i].classList.remove('border-act');
    i--;
    myBorder[i].classList.remove('animated');

    if (i >= 3) {
        prevBtn.removeAttribute('disabled');
        nextBtn.setAttribute('disabled', "disabled");
    } else if (i > 0 && i < 3) {
        prevBtn.removeAttribute('disabled');
        nextBtn.removeAttribute('disabled');
    } else {
        prevBtn.setAttribute('disabled', "disabled");
        nextBtn.removeAttribute('disabled');
    };

};