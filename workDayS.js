//My elements for the button and  row
var Row8 = document.querySelector("#row8am");
var button8am = document.querySelector(".button8am");
recordForm();
function recordForm() {
 document.getElementById("row8am").value = localStorage.getItem("row8am"); 
}  
button8am.addEventListener("click", function(event){
    event.preventDefault();

    var formCall = document.querySelector("#row8am").value;

    if(Row8 === "") {


    } else {
    localStorage.setItem("row8am", formCall);
    recordForm();    
    console.log(button8am)
    }
});
var Row10 = document.querySelector("#row10am");
var button10am = document.querySelector(".button10am");
recordForm2();
function recordForm2() {
 document.getElementById("row10am").value = localStorage.getItem("row10am"); 
}  
button10am.addEventListener("click", function(event){
    event.preventDefault();

    var formCall2 = document.querySelector("#row10am").value;

    if(Row10 === "") {


    } else {
    localStorage.setItem("row10am", formCall2);
    recordForm2();    
    console.log(button10am)
    }
});
var Row12 = document.querySelector("#row12pm");
var button12pm = document.querySelector(".button12pm");
recordForm3();
function recordForm3() {
 document.getElementById("row12pm").value = localStorage.getItem("row12pm"); 
}  
button12pm.addEventListener("click", function(event){
    event.preventDefault();

    var formCall3 = document.querySelector("#row12pm").value;

    if(Row12 === "") {


    } else {
    localStorage.setItem("row12pm", formCall3);
    recordForm3();    
    console.log(button12pm)
    }
});
var Row2pm = document.querySelector("#row2pm");
var button2pm = document.querySelector(".button2pm");
recordForm4();
function recordForm4() {
 document.getElementById("row2pm").value = localStorage.getItem("row2pm"); 
}  
button2pm.addEventListener("click", function(event){
    event.preventDefault();

    var formCall4 = document.querySelector("#row2pm").value;

    if(Row2pm === "") {


    } else {
    localStorage.setItem("row2pm", formCall4);
    recordForm4();    
    console.log(button2pm)
    }
});
var Row4pm = document.querySelector("#row4pm");
var button4pm = document.querySelector(".button4pm");
recordForm5();
function recordForm5() {
 document.getElementById("row4pm").value = localStorage.getItem("row4pm"); 
}  
button4pm.addEventListener("click", function(event){
    event.preventDefault();

    var formCall5 = document.querySelector("#row4pm").value;

    if(Row4pm === "") {


    } else {
    localStorage.setItem("row4pm", formCall5);
    recordForm5();    
    console.log(button4pm)
    }
});