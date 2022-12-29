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



$(function(){
  //보도자료 슬라이드, 위로
  var current1 = 0;
  var subtext = $('.sub_text>li');
  var tim;

  function set(){
      tim = setInterval(function(){
          var prev1 = subtext.eq(current1);

          move1(prev1,0,'-100%');
          current1++;
          if(current1 == subtext.size()){
              current1 = 0;
          }
          var next1 = subtext.eq(current1);
          move1(next1, '100%',0);
          
      },1500);
  }
  set();

  $('.sub_text').hover(function(){
      clearInterval(tim);
  },function(){
      set();
  });

  function move1(tgg, start, end){
      tgg.css('top', start).stop().animate({top:end},800);
  }

  //사회공헌 슬라이드, 위에서 아래로
  var current2 = 0;
  var subtext2 = $('.sub_text1>li');
  var tim2;

  function set2(){
      tim2 = setInterval(function(){
          var prev2 = subtext2.eq(current2);

          move2(prev2,0,'100%');
          current2++;
          if(current2 == subtext2.size()){
              current2 = 0;
          }
          var next2 = subtext2.eq(current2);
          move2(next2, '-100%',0);
          
      },1500);
  }
  set2();

  $('.sub_text1').hover(function(){
      clearInterval(tim2);
  },function(){
      set2();
  });

  function move2(tgg2, start, end){
      tgg2.css('top', start).stop().animate({top:end},800);
  }


});








