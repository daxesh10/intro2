//adding wow



// adding jquery
// var script = document.createElement('script');
// script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

let animateLogo = ()=>{
$("#logoAndViews").addClass("wow slideInLeft animated").delay(10000)
$("#logoAndViews").addClass("wow rollOut animated").delay(10000)
}   



$(document).ready(function(){

var wow = new WOW()
wow.init()


animateLogo()
})
