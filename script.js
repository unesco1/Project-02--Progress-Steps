// create parent element
let div = document.createElement('div');
document.body.appendChild(div);
let parent = document.querySelectorAll('div')[0];

// create 2 childs parent element
let div2 = document.createElement('div');
for (let i=0;i<2;i++){
    parent.appendChild(div2.cloneNode(true));
    }

// create childs of 2 childs parent
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let parentCadre = document.querySelector('body div div:first-of-type');
let parentCercle = document.querySelector('body div div:last-of-type');
for (let j=0;j<3;j++) {
    div3.setAttribute('class', 'cadre');
    parentCadre.appendChild(div3.cloneNode(true));
}
for (let k=1;k<5;k++){
    div4.innerHTML = k;
    if (k===1) {
        div4.setAttribute('class', 'cercle border-act');
    } else if (k>=1) {
        div4.setAttribute('class', 'cercle');
    };
    parentCercle.appendChild(div4.cloneNode(true));
}

//create button elements
let buttons = document.createElement('button');
let secDiv = document.createElement('div');
let arrBtn = ['Prev', 'Next'];
for (let b=0;b<2;b++) {
    buttons.innerHTML = arrBtn[b];
    document.body.appendChild(secDiv).appendChild(buttons.cloneNode(true));    
}

// set attributes
parent.setAttribute('class', 'parent');
parentCadre.setAttribute('class', 'parent-cadre');
parentCercle.setAttribute('class', 'parent-cercle');
secDiv.setAttribute('class', 'buttons');

let arrButtons = document.querySelectorAll('button');

arrButtons[0].setAttribute('onclick', "prev()");
arrButtons[0].setAttribute('disabled', 'disabled');
arrButtons[1].setAttribute('onclick', 'next()');

// Functions
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