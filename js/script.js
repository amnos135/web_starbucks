$(function(){
  //노티스 라인 슬라이드, 위로
  var current1 = 0;
  var subtext = $('.sub_text1>li');
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

  $('.sub_text1').hover(function(){
      clearInterval(tim);
  },function(){
      set();
  });

  function move1(tgg, start, end){
      tgg.css('top', start).stop().animate({top:end},800);
  }

  //노티스라인 슬라이드, 위에서 아래로
   
//노티스라인 배너 숨기기 토글
  $('.list2, .notice_banner').click(function() {
    $('.notice_banner').toggleClass('toggled');
}); 
//노티스라인 배너 숨기기 토글 끝



 
//메인메뉴 드롭다운

 $('nav#gnb>ul>li').mouseenter(function() {
    $('nav#gnb>ul>li>ul').slideDown(500);
  }); 
  $('nav#gnb>ul>li').mouseleave(function() {
    $('nav#gnb>ul>li>ul').slideUp(50);
  }); 

  /*  $("nav#gnb>ul>li").hover(function() {
    $(this)
      .find("ul")
      .stop()
      .fadeToggle(300);
  });   */

/*   $(" nav#gnb>ul>li").hover(function () {
	$(" nav#gnb>ul>li>ul").toggleClass('show');
}) 안됨 */


//메인메뉴 드롭다운 끝
 


});








