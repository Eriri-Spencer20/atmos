var index = 0;
fungsi();
function fungsi(){
    var i;
    var slides = document.getElementsByClassName('myslides');
    var dots = document.getElementsByClassName('dot');
    for (i=0; i<slides.length; i++){
        slides[i].style.display="none"; 
    }  
index++;
if (index > slides.length) {index=1}

for(i=0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace("active","");
}
slides[index-1].style.display = "block";
dots[index-1].className += "active";
setTimeout(fungsi, 2500);
}
