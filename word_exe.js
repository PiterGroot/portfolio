
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000
    })
    
    Swal.fire({
        icon: 'info',
        title: 'Let op',
        text: 'Deze site is nog niet geoptimaliseerd voor mobiele apparaten.',
      })
});