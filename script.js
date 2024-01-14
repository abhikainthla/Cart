// ------------------------code for buton2 --------------------------

let addButton2 = document.getElementById("plus2");
let removeButton2 = document.getElementById("minus2");
let num2 = 0;
let countValue2 = 0;

function updateCount2() {
  document.getElementById("no2").innerText = countValue2;
}

function increase2() {
  countValue2++;
  updateCount2();

  updateCart2();
}

function decrease2() {
  countValue2--;
  if (countValue2 < 0) {
    countValue2 = 0;
  }
  updateCount2();

  updateCart2();
}

function updateCart2(){
    let cartItem2 = document.getElementById('quantityno2');
    cartItem2.innerHTML = countValue2+ " x 200";
    updateTotal();
}



addButton2.addEventListener("click", increase2);
removeButton2.addEventListener("click", decrease2);

// -------------------------code for button3---------------------------

let addButton3 = document.getElementById("plus3");
let removeButton3 = document.getElementById("minus3");
let num3 = 0;
let countValue3 = 0;

function updateCount3() {
  document.getElementById("no3").innerText = countValue3;
}

function increase3() {
  countValue3++;
  updateCount3();

    updateCart3();
}

function decrease3() {
  countValue3--;
  if (countValue3 < 0) {
    countValue3 = 0;
  }
  updateCount3();


  updateCart3();
}

function updateCart3(){
    let cartItem3 = document.getElementById('quantityno3');
    cartItem3.innerHTML = countValue3+ " x 300";
    updateTotal();
}



addButton3.addEventListener("click", increase3);
removeButton3.addEventListener("click", decrease3);

// --------------------------code for button1-----------------------

let addButton = document.getElementById("plus1");
let removeButton = document.getElementById("minus1");
let num = 0;
let countValue = 0;

function updateCount1() {
  document.getElementById("no1").innerText = countValue;
}

function increase1() {
  countValue++;
  updateCount1();
  
    updateCart1();
}


function decrease1() {
  countValue--;
  if (countValue < 0) {
    countValue = 0;
  }
  updateCount1();

    updateCart1();
}


function updateCart1(){
    let cartItem1=document.getElementById('quantityno1');
    cartItem1.innerHTML=countValue+ " x 100";
    updateTotal();
}

function updateTotal() {
    let total = document.getElementById('totalno');
    total.innerHTML=countValue*100+countValue2*200+countValue3*300;
}

  
addButton.addEventListener("click", increase1);
removeButton.addEventListener("click", decrease1);


let productName = document.getElementById('prodName');


