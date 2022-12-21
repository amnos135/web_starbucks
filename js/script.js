$(window).scroll(function() {
  
	if ($(window).scrollTop() >  $(".portfolio").offset().top -150 ){
    
    $('.bg').addClass('show');
    $('#menu').fadeTo('fast', 0.9).css({position: 'fixed', top: '30px'});
    $('header').css({background: "white"});
    
  } else {
    
    $('.bg').removeClass('show');
    $('#menu').fadeTo('slow', 0.9).css({position: 'fixed', top: '0px'});
    $('header').css({background:'none' });
 	}; 

});//https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js


document.addEventListener("mousemove", function(event) {
  const x = event.pageX - 7.5;
  const y = event.pageY - 7.5;
  const cursor = document.querySelector("#cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});//커서

$(document).ready(function(){
  $('h1').mouseover(function() {
    $('#cursor').css({transform: "scale(8)", 'mix-blend-mode': "difference", background: "white" });
  });
  $('h1').mouseleave(function() {
    $('#cursor').css({transform: "scale(1)",'mix-blend-mode': "normal", background: "black"});
  });


  $('button').mouseover(function() {
    $('#cursor').css({transform: "scale(8)", 'mix-blend-mode': "difference", background: "white"});
  });

  $('button').mouseleave(function() {
    $('#cursor').css({transform: "scale(1)",'mix-blend-mode': "normal", background: "black"});
  });//커서

  $(".2_popup").click(function() {
    $(".popup").show();
  });
  $(".close").click(function() {
    $(".popup").hide(); 
  });
  $(".popup").click(function() {
    $(".popup").hide(); 
  });
  //.view모달팝업

});


/* 메인페이지 애니메이션 */
$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});








var Hello = ["\n%c 잘 부탁드립니다!" + " %c https://github.com/amnos135/ \n", "color: white; font-size: 14px; background: #000; padding:5px 0;", "background: #fff; padding:3px 0; margin-bottom: 4px;"];
window.console.log.apply(console, Hello);// 콘솔








