//let button = document.getElementById('changecontent');
//let paragraph = document.getElementById('myparagraph');
//let back = document.getElementById('testt');

//button.addEventListener("click",function () {
  //let name = "Hellow Word"
 // let rer = "Mohtava Avaz mishavad!"
  // paragraph.innerText= name;
  // paragraph.style.color= 'Red';
   //back.style.backgroundColor= 'blue';
   //alert (rer);
   

//});

let contactForm = document.getElementById("contactForm");
let confirmationMassage = document.getElementById("confirmationMassage");
let color = document.getElementById("color");

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  confirmationMassage.style.display='block';
  color.style.backgroundColor='red';




});


