/**
*  Jquery floater ���̾ �׻� ȭ�鿡 ���ְų� ���� �ٴϵ��� ó��
*
* options
*
*  allwaysTop : true , �׻� ��. false ����ٴϵ���
*  speed  : 1000  ����ٴϴ� �ӵ�
*  bottom : true �׻� �ϴܿ�. false ����ٴϵ���
*  default_x : �߾������϶� ������Ʈ ���� ���޴� ������
* 
* @since 2009-10-30
* @author jsyang <yakuyaku@gmail.com>
* @version 1
*
*/

//����1) (function($) { /* ������� */ })(jQuery); ���� ���ڷ� �Ѱ��ִ� jQuery�� jQuery ��ü�̰� �ᱹ $ �Ű������� �Լ� ������ jQuery ��ü�� ���ȴ�.
//����2) jquery�� �ٸ� ���̺귯���� �Բ� ����� �� $ ������ �浹�� �Ͼ�� ��찡 ���� �� �ִ�. �̸� �̿��� �����ϱ� ���ؼ� ���� ���� ����Ѵ�.

(function($) {  //(function($) { /* ������� */ })(jQuery); �� �ǹ̴� jQuery ��� ���ڸ� $ ��� �Ű������� �Ѱܹ޾� ����ϴ� ��� ���� �Լ��� �ǹ�

	$.extend($.fn, {  //$.extend�� �ټ��� ��ü�� �ϳ��� ��ü�� ��ġ�� merge����� ����. jQuery prototype ( $.fn) ��ü�� Ȯ�� �Ͽ� jQuery()�Լ��� ����� ���ִ� ���ο� �޼ҵ带 ����.
		Floater : function(setting)  
		{
			var options = $.extend($.fn.Floater.defaults, setting); //���ְų� ����ٴϴ� �⺻��,���ð�
			var box   = this;
			var initTop = options.initTop; //�Ǹ޴� ��ġ 250
			
			if(options.bottom) { //���� �ϴܿ� �ִٸ�
				bottom_pos = $(window).height() - $(box).height() - initTop; //���������-�ڽ�����-�Ǹ޴� ��ġ 250
				$(box).css('top' , bottom_pos);
				initTop = bottom_pos; //�ʱⰪ���� �̵�
			}

			if(options.default_x) { //�߾������϶� ������Ʈ ���� ���޴� ������
				box.css('left' , getX($(options.default_x)) );
				if(box.css('display')=='none') box.css('display','block'); //�ڽ����̰�
				
				$(window).bind('resize', function() { //.bind() �޼���� �� �״�� ��ü�� �̺�Ʈ�� �����ִ� ����. ũ�⿡ �°� �����ϰ� 
					box.css('left' , getX($(options.default_x))); //�ڽ��� �������� �Ͽ� ���޴� ���̱�
				});

			}

			var prevTop = initTop; //���޴���ġ�� ����ž�� ��ġ�� ��� 

			$(window).bind('scroll', function(e){adjustTop();}); //.bind() �޼���� �� �״�� ��ü�� �̺�Ʈ�� �����ִ� ����. ���� ������Ʈ�� ���� ����Ǹ� ȣ��.

			function getX(el) //getX �� getY�� �߻� �޼���.(�����ڸ޼���).EL �⺻(.,[],()),EL ���������( +,-,*, /,%)... https://codedragon.tistory.com/6009 

			{
				return el.get(0).offsetLeft + el.width(); //offsetParent ��Ҹ� �������� ���� ��ġ (�ȼ� ����)�� ��ȯ +���ΰ�
			};

			function adjustTop() //���� ������Ʈ�� ���� ����Ǹ� ȣ��.
			{
				var newTop = computeTop();  //top�� ��ġ ����Ͽ� newtop�� ���
				if (newTop <= initTop) newTop = initTop; 
				if (prevTop != newTop) { //���ο� ž��ġ�� ����ž�� ��ġ�� �ٸ��ٸ�
					layerMove(newTop); //���ο� ž�� ���̾��̵�
					prevTop = newTop; //���ο� ž�� ��ġ�� ����ž�� ��ġ��
				}
			};

			function layerMove(dest) //�������� ���̾��̵�
			{
				if(options.alwaysTop) { //true ,  �׻� ���� ��ġ�Ѵٸ�
					//var posx=$(window).scrollLeft() + $(window).width() - $(box).width();
					$(box).css({'top': dest}); //top���� �̵�
				}else{ //�׷����ʴٸ�
					$(box).stop();  //����ٰ�
					$(box).animate({'top': dest},{'duration':options.speed}); //ž���� �̵�
				}
			};

			function computeTop() //compute:����ϴ�. top�� ��ġ ���
			{
				return $(window).scrollTop() + initTop; //��ܿ��� �Ǹ޴���ġ�� ��ȯ
			};
		}

	});

	$.fn.Floater.defaults = {
		'alwaysTop' : false ,  //true�̸� ����
		'bottom'    : false , //true�̸� �Ʒ��� �������� �Ǹ޴� �̵�
		'default_x' : false ,
		'initTop'   : 50 , //��ũ����ġ
		'speed' : 30  //�ӵ�
	};

})(jQuery);