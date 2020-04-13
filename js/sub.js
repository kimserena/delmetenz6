$(document).ready(function(){ 
  $(window).scroll(function(){ 
    var scroll = $(window).scrollTop(); 
    if(scroll>300){ 
      $("nav ul li a p").css("color","#222"); 
    } 
    else{ 
      $("nav ul li a p").css("color","#fff"); 
    } 
  }) 
})