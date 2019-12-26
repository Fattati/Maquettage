 var btn_menu=document.getElementById("btn_menu");
    var btn_close=document.getElementById("btn_close");
    var menu1=document.getElementById("menu1");
    btn_menu.onclick=function()
    {
        btn_menu.style.display="none";
        btn_close.style.display="inline";
        menu1.style.display="block";
    } 
    btn_close.onclick=function()
    {
       btn_menu.style.display="block";
        btn_close.style.display="none";
        menu1.style.display="none";
    
    }
    var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
    
var i = 0;
var images = [];
var time = 3000;

//Image List
images[0] = "../img/1.png";
images[1] = "../img/2.png";
images[2] = "../img/3.png";

function changeImg(){

  document.slide.src = images[i];

  if(i<images.length - 1){
 i++;


  }else{
    i = 0;
  }
  setTimeout("changeImg()",time);
}
window.onload = changeImg;
