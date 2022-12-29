

$(function(){
  //노티스 라인 슬라이드, 위로
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

  //노티스라인 슬라이드, 위에서 아래로
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








