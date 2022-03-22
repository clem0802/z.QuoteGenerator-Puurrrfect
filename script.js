
//Hamburger//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const gridContainer = document.querySelector(".grid-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  gridContainer.classList.toggle('add-margin');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  gridContainer.classList.remove('add-margin');
}))



//Quote Generator//

let inspireMe = document.querySelector(".inspire-button")
let page = Math.ceil(Math.random()*7268);
let randomNumber = Math.ceil(Math.random()*10);

inspireMe.addEventListener("click",(event)=> {
    event.preventDefault();
  fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
  .then(response=>response.json())
  .then(data=>{
   quote.innerHTML = data.data[randomNumber].quoteText;
   author.innerHTML = data.data[randomNumber].quoteAuthor;
  })
  page = Math.ceil(Math.random()*7268);
  randomNumber = Math.ceil(Math.random()*10);
})



//Contact Form//
const popUpMenu = document.querySelector("#contact-popup");

document.querySelector("#contact-btn").addEventListener("click", () => {
  popUpMenu.style.display = "block";
  popUpMenu.classList.toggle("contact-transition");
})

document.querySelector("#close-btn").addEventListener("click", () => {
  popUpMenu.style.display = "none";
})

const nameInput = document.querySelector("#your-name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector(".success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessages();
  let errorFlag = false;

  if(nameInput.value.length < 1){
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border")
    errorFlag = true;
  }
  
  if(!emailIsValid(email.value)) {
    errorNodes[1].innerText = "invalid email address";
    email.classList.add("error-border")
    errorFlag = true;
  }

  if(message.value.length < 1){
    errorNodes[2].innerText = "Please enter Message";
    message.classList.add("error-border")
    errorFlag = true;
  }

  if(!errorFlag) {
    success.innerText = "Success!"
  }
}



//Clear error / success messages//
function clearMessages(){
  for(let i =0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}



//Animal Pics
let imgs1=["dog.jpeg", "kitty.jpeg"]
let indexNumber1 = 1;
let image1 = document.getElementById("dog"); 
image1.addEventListener("mouseover", ()=>{  
    image1.setAttribute("src",imgs1[indexNumber1]);
    if(indexNumber1 === imgs1.length-1){
        indexNumber1 = 0;
    } else{
        indexNumber1++;
    }
})

let imgs2=["puppy.jpg", "cutepuppy.jpeg"]
let indexNumber2 = 1;
let image2 = document.getElementById("puppy"); 
image2.addEventListener("mouseover", ()=>{  
    image2.setAttribute("src",imgs2[indexNumber2]);
    if(indexNumber2 === imgs2.length-1){
        indexNumber2 = 0;
    } else{
        indexNumber2++;
    }
})

let imgs3=["rabbit.jpg", "cutest_cat.png"]
let indexNumber3 = 1;
let image3 = document.getElementById("rabbit"); 
image3.addEventListener("mouseover", ()=>{  
    image3.setAttribute("src",imgs3[indexNumber3]);
    if(indexNumber3 === imgs3.length-1){
        indexNumber3 = 0;
    } else{
        indexNumber3++;
    }
})




//Image alterations

// document.getElementById("puppy").addEventListener("click", displayMessage1);
// function displayMessage1(){
//     document.getElementById("message1").innerHTML = "Whoff-Meow!";
// }

// document.getElementById("dog").addEventListener("click", displayMessage2);
// function displayMessage2(){
//     document.getElementById("message2").innerHTML = "Whoff-Whoff!";
// }

// document.getElementById("rabbit").addEventListener("click", displayMessage3);
// function displayMessage3(){
//     document.getElementById("message3").innerHTML = "Whimp-Whimp!";
// }



//Animal Pics//
// function firstImage(){
//  document.getElementById('dog').src="kitty.jpeg";
// }

// function secondImage(){
//  document.getElementById('puppy').src="cutepuppy.jpeg";
// }

// function thirdImage(){
//  document.getElementById('rabbit').src="cutest_cat.png";
// }
