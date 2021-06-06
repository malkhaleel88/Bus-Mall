/* eslint-disable no-empty */
'use strict';

let listOfImages = document.getElementById('Products');
let leftImage = document.getElementById('LeftProduct');
let midImage = document.getElementById('MidProduct');
let rightImage = document.getElementById('RightProduct');
let press = document.getElementById('ImageResult');

let rounds = 25;
let clicksCount = 0;
let leftIndex;
let midIndex;
let rightIndex;

function ProductsImage(name, imagePath){

  this.name = name;
  this.imagePath = imagePath;
  this.imageShown = 0;
  this.votes= 0;
  ProductsImage.allProducts.push(this);
}
ProductsImage.allProducts = [];

new ProductsImage('bag', 'img/bag.jpg');
new ProductsImage('banana', 'img/banana.jpg');
new ProductsImage('bathroom', 'img/bathroom.jpg');
new ProductsImage('boots', 'img/boots.jpg');
new ProductsImage('breakfast', 'img/breakfast.jpg');
new ProductsImage('bubblegum', 'img/bubblegum.jpg');
new ProductsImage('chair', 'img/chair.jpg');
new ProductsImage('cthulhu', 'img/cthulhu.jpg');
new ProductsImage('dog-duck', 'img/dog-duck.jpg');
new ProductsImage('dragon', 'img/dragon.jpg');
new ProductsImage('pen', 'img/pen.jpg');
new ProductsImage('pet-sweep', 'img/pet-sweep.jpg');
new ProductsImage('scissors', 'img/scissors.jpg');
new ProductsImage('shark', 'img/shark.jpg');
new ProductsImage('sweep', 'img/sweep.png');
new ProductsImage('tauntaun', 'img/tauntaun.jpg');
new ProductsImage('unicorn', 'img/unicorn.jpg');
new ProductsImage('usb', 'img/usb.gif');
new ProductsImage('water-can', 'img/water-can.jpg');
new ProductsImage('wine-glass', 'img/wine-glass.jpg');

function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * ProductsImage.allProducts.length);
  return randomIndex;
}

function displayProducts(){
  leftIndex = generateRandomIndex();
  midIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();

  while(leftIndex === midIndex || leftIndex === rightIndex || midIndex === rightIndex){
    midIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
  }
  leftImage.setAttribute('src', ProductsImage.allProducts[leftIndex].imagePath);
  ProductsImage.allProducts[leftIndex].imageShown++;
  midImage.setAttribute('src', ProductsImage.allProducts[midIndex].imagePath);
  ProductsImage.allProducts[midIndex].imageShown++;
  rightImage.setAttribute('src', ProductsImage.allProducts[rightIndex].imagePath);
  ProductsImage.allProducts[rightIndex].imageShown++;
}
displayProducts();


listOfImages.addEventListener('click', clickForVote);

function clickForVote(event){
  clicksCount++;

  if(rounds >= clicksCount){
    if(event.target.id === 'LeftProduct'){
      ProductsImage.allProducts[leftIndex].votes++;
    }else if(event.target.id === 'MidProduct'){
      ProductsImage.allProducts[midIndex].votes++;
    }else if(event.target.id === 'RightProduct'){
      ProductsImage.allProducts[rightIndex].votes++;
    }
    displayProducts();

  }else{
    press.addEventListener('click', viewResults);
    listOfImages.removeEventListener('click', clickForVote);
  }
}

function viewResults(){
  let ul = document.getElementById('ListOfResults');
  for (let i = 0; i < ProductsImage.allProducts.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${ProductsImage.allProducts[i].name} had ${ProductsImage.allProducts[i].votes} votes, and was seen ${ProductsImage.allProducts[i].imageShown} times.`;

  }

}
