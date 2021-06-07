$(document).ready(function(){

    var clickVal = false;
    var drawVal = false;

    // var $container = $("#main");

    // function update() {
	//     Draggable.create(".drag-area", {
	// 	    bounds:$container,
	// 	    edgeResistance:0.65,
	// 	    type:"x,y",
	// 	    throwProps:true,
    //         autoScroll:false
	//     });
    // }

    // update();

    $('.drag-able').draggable({
        'scroll': false
    });



    $('.genre').mouseenter(function(){
        if(clickVal == false){
            $('.genre').stop().animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'0.3'});
            $(this).stop().animate({'width':'760px', 'height':'540px', 'margin-top':'-110px', 'margin-left':'-170px', 'opacity':'1'});
            $(this).find('.cover-list').stop().animate({'width':'100%', 'height':'460px'}, 'easeOutCubic');
            $(this).find('.cover-list img').stop().animate({'width':'150px', 'height':'150px'});
            $(this).find('.genre-title').stop().animate({'font-size':'36px', 'height':'80px'});
        }
    }).mouseleave(function(){
        if(clickVal == false){
            $(this).removeClass('genre-active');
            $(this).find('.cover-list').stop().animate({'height':'270px'});
            $(this).find('.cover-list img').stop().animate({'width':'100px', 'height':'100px'});
            $(this).find('.genre-title').stop().animate({'font-size':'24px', 'height':'50px'});
            $('.genre').stop().animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'1'});
        }
    })
    $('.genre').click(function(){
        $('.draw').stop().animate({'opacity':'1'});
        clickVal = true;
        $('.cover-list').slick({
            slide: 'img',
            draggable: true,
            infinite: true,
            centerMode: true,
            variableWidth: true,
            arrows: false,
            dots: false,
        }).css({'z-index':'9990'});
        $('.genre').stop().animate({'opacity':'0'});
        $('.drag-able').draggable('destroy');
        $('.drag-area').stop().animate({'width':'100vw', 'height':'100vh', 'top':'0', 'left':'0'});
        $(this).stop().animate({'opacity':'1', 'width':'100vw', 'height':'100vh', 'margin-top':'0', 'margin-left':'0', 'top':'0', 'left':'0'}, function(){
            $('.paint-btn-area').stop().animate({'bottom':'7%'}, 300, 'easeOutCubic');
        }).css({'z-index':'9990'});
        $(this).find('.cover-list').stop().animate({'height':'200px', 'margin-top':'18%'});
        $(this).find('.genre-title').stop().animate({'font-size':'72px', 'margin-top':'3%'});
        $(this).find('.cover-list img').css({'position':'relative', 'float':'left', 'transform':'translate(0, 0)'}).stop().animate({'width':'200px','height':'200px','top':'0','left':'0', 'margin-right':'30px', 'margin-left':'30px'});
        $('.back-btn').stop().animate({'width':'52px', 'opacity':'1', 'margin-left':'40px'}, 600);

    });

    $('.back-btn').click(function(){
        $('.draw').stop().animate({'opacity':'0'});
        $('.paint-btn-area').stop().animate({'bottom':'-150px'}, 300, 'easeOutCubic');
        drawVal = false;
        $('.draw-btn').text('DRAW');
        $('.enter-btn').stop().animate({'height':'50px', 'border':'1px'});
        
        
        $('.drag-able').draggable();
        $('.drag-area').stop().animate({'width':'3120px', 'height':'1920px', 'top':'-480px', 'left':'-540px'});
        $('.cover-list').slick("unslick");
        
        $('#rnb').animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'1', 'top':'540px', 'left':'360px'});
        $('#hiphop').animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'1', 'top':'840px', 'left':'1240px'});
        $('#jazz').animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'1', 'top':'240px', 'left':'1420px'});
        $('#rock').animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'1', 'top':'620px', 'left':'2220px'});
        $('#electro').animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'1', 'top':'1340px', 'left':'700px'});
        $('#pop').animate({'width':'420px', 'height':'320px', 'margin-top':'0', 'margin-left':'0', 'opacity':'1', 'top':'1200px', 'left':'1980px'});
        $('.genre').find('.cover-list').stop().animate({'width':'100%','height':'270px', 'margin-top':'0', 'margin-left':'0'});
        $('.genre').find('.cover-list img').stop().animate({'width':'100px', 'height':'100px'});
        $('.genre').find('.genre-title').stop().animate({'font-size':'24px', 'height':'50px'});
        $('.back-btn').stop().animate({'width':'0', 'opacity':'0', 'margin-left':'0'}, 600, function(){
            clickVal = false;
        });

    });
    
    $('.info-btn').click(function(){
        $('#info').css({'z-index':'9992'}).stop().animate({'opacity':'1'}, 400);
    });
    $('.info-back-btn').click(function(){
        $('#info').stop().animate({'opacity':'0'}, 200, function(){
            $('#info').css({'z-index':'-9990'});
        });
    });
    $('.search-btn').click(function(){
        $('#search').css({'z-index':'9992'}).stop().animate({'opacity':'1'}, 400);
    });
    $('.search-back-btn').click(function(){
        $('#search').stop().animate({'opacity':'0'}, 200, function(){
            $('#search').css({'z-index':'-9990'});
        });
    });



    $('.draw-btn').click(function(){
        if(!drawVal){
            drawVal = true;
            $(this).text('DRAW END');
            $('.enter-btn').stop().animate({'height':'0', 'border':'0px'});
            $('.cover-list').stop().animate({'width':'500px', 'height':'70px', 'margin-top':'20px', 'margin-left':'36.5%'});
            $('.genre-title').stop().animate({'height':'50px','font-size':'20px', 'margin-top':'0'});
            $('.cover-list img').stop().animate({'width':'70px','height':'70px', 'margin-left':'15px', 'margin-right':'15px'})
        } else {
            drawVal = false;
            $(this).text('DRAW');
            $('.enter-btn').stop().animate({'height':'50px', 'border':'1px'});
            $('.cover-list').stop().animate({'width':'100%', 'height':'200px', 'margin-top':'18%', 'margin-left':'0'});
            $('.genre-title').stop().animate({'height':'80px','font-size':'72px', 'margin-top':'3%'});
            $('.cover-list img').stop().animate({'width':'200px','height':'200px', 'margin-left':'30px', 'margin-right':'30px'})
        }
    })

});

