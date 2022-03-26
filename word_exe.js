$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000
    })
    $(".carousel").on("mouseenter",function() {
      $(this).carousel('cycle');   
    }) 
});