function sliderFunc(){
if (document.getElementsByClassName("pictureDiv")[0].classList.contains("active")){
   document.getElementsByClassName("pictureDiv")[1].classList.add("active");
   document.getElementsByClassName("pictureDiv")[0].classList.remove("active");
}else if(document.getElementsByClassName("pictureDiv")[1].classList.contains("active")){
   document.getElementsByClassName("pictureDiv")[2].classList.add("active");
   document.getElementsByClassName("pictureDiv")[1].classList.remove("active");
}else if(document.getElementsByClassName("pictureDiv")[2].classList.contains("active")){
   document.getElementsByClassName("pictureDiv")[3].classList.add("active");
   document.getElementsByClassName("pictureDiv")[2].classList.remove("active");
}else if(document.getElementsByClassName("pictureDiv")[3].classList.contains("active")){
   document.getElementsByClassName("pictureDiv")[4].classList.add("active");
   document.getElementsByClassName("pictureDiv")[3].classList.remove("active");
}else if(document.getElementsByClassName("pictureDiv")[4].classList.contains("active")){
   document.getElementsByClassName("pictureDiv")[0].classList.add("active");
   document.getElementsByClassName("pictureDiv")[4].classList.remove("active");
}
}
setInterval(sliderFunc,4000);