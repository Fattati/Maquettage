var slider = 1;
Slider(slider);
function incrementerslider(n){
    Slider(slider += n);
}
function Slider(m) {
    var i ;
    var y = document.getElementsByClassName("slider-img");
    if (m>y.length) slider = 1;
    if (m<1) slider = y.length;
    for(i=0;i<y.length;i++){
        y[i].style.display= "none";
    }
    y[slider - 1].style.display = "block";


}