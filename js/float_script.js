$(function () {

    var options = {

        'speed': 500,
        'initTop': 390,
        'alwaysTop': false,
        'default_x': '#wrap'
    }

    $('#floatdiv').Floater(options);
    var btn = $('#floatdiv ul li');

    //페이지 위치


    $('h1').click(function () { /* 로고누르면 맨위로 */
        $('html, body').animate({
            scrollTop: $('.skills').offset().top
        }, 900);
    })

    $('.bt-as').click(function () { /*  about 누르면 맨위로 */
        $('html, body').animate({
            scrollTop: $('.skills').offset().top
        }, 900);
    })

    $('.bt-p').click(function () { /*  portfolio 누르면 class.portfolio의 위치보다 120px위에 도달하기 */
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top -140
        }, 900);
    })



    $(document).ready(function () { /* 스크롤 위아래로 왔다갔다 */
        $("#btn01").click(function () {
            $('html, body').animate({
                scrollTop: $(window).scrollTop() - 700
            }, 600);
        });
    });

    $(document).ready(function () {
        $("#btn02").click(function () {
            $('html, body').animate({
                scrollTop: $(window).scrollTop() + 700
            }, 600);
        });
    });



});