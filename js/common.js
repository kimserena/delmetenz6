$(document).ready(function(){ 
  $(window).scroll(function(){ 
    var scroll = $(window).scrollTop(); 
    if(scroll>800){ 
      $("nav ul li a p").css("color","#222"); 
    } 
    else{ 
      $("nav ul li a p").css("color","#fff"); 
    } 
  }) 
})

function fnMove(seq){
        var offset = $("#div" + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    }