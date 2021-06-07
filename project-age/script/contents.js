var audio = new Audio('file/hiphop/Eminem-Stan.mp3');

$('.menu-slider').slick({
    arrows: false,
    dots: false,
    variableWidth: true,
    infinite: false,
    centerMode: false,
    swipe: true,
    swipeToSlide: true,
    infinite : false,
});

var clickNum = 0;

$('.article').mouseenter(function() {
    clickNum = 1;
    $(this).stop().animate({'height':'500px','margin-top':'160px'});
    $(this).find('.articleCover').stop().animate({'width':'360px','height':'360px','margin':'0 0 0 0'});   
}).mouseleave(function() {
    clickNum = 0;
    $('.article').stop().animate({'height':'300px', 'margin-top':'250px'});
    $('.article').find('.articleCover').stop().animate({'width':'160px','height':'160px','margin':'0px 100px 0 100px'}) 
});

$('.article').click(function() {
    clickNum = 0;
    $('.article').stop().animate({'height':'300px', 'margin-top':'250px'});
    $('.article').find('.articleCover').stop().animate({'width':'160px','height':'160px','margin':'0px 100px 0 100px'})
})


var nowPage = 0;

$('.context').on('mousewheel DOMMouseScroll', function(e) {
    if($('.context').is(":animated")){
        return false;
    }

    if($(e.target).is('.tracklist') || $(e.target).parents().is('.tracklist') ) return;

    var EE = e.originalEvent;

        console.log(EE);

        if (EE.wheelDelta == 120){
            

            if(nowPage > 0){
                if(nowPage < 5){
                    nowPage--;
                    $('.context').stop().animate({'margin-left':'+=50%'}, 600, 'easeInOutCubic');
                    
                }
                
                
            }
        }else{
            if(nowPage < 4){
                if(nowPage >= 0){
                    nowPage++;    
                    $('.context').stop().animate({'margin-left':'-=50%'}, 600, 'easeInOutCubic');
                }

                  
            }           

        }


})
var volon = true;

$('.y2000').click(function(){
    $('.con2000').css({'z-index':'9990'}).stop().animate({'opacity':'1'});
    audio.play();
})

var bookmarkVal = false;
var favoriteVal = false;

$('.bookmark-btn').click(function(){
    if(bookmarkVal == false){
        bookmarkVal = true;
        $(this).find('.invi').stop().animate({'opacity':'1'}, 200);
    } else {
        bookmarkVal = false;
        $(this).find('.invi').stop().animate({'opacity':'0'}, 200);

    }
})

$('.favorite-btn').click(function(){
    if(favoriteVal == false){
        favoriteVal = true;
        $(this).find('.invi').stop().animate({'opacity':'1'}, 200);
    } else {
        favoriteVal = false;
        $(this).find('.invi').stop().animate({'opacity':'0'}, 200);

    }
})




$('.trackbox').click(function(){
    volon = true;
    audio.pause();
        audio.currentTime = 0;
    $('.trackbox').removeClass('playing');
    $(this).addClass('playing');
    audio = new Audio($(this).attr('name'));
        
        audio.play();



    $('.music-name').html($(this).find('.track-title').html())
        
})

var audioplaying = true;

$('.play-pause').click(function(){
    if(audioplaying == true){
        audioplaying = false;
        audio.pause();
        $('.playbtn').css({'display':'inline-block'});
        $('.pausebtn').css({'display':'none'});
    } else if (audioplaying == false) {
        audioplaying = true;
        audio.play();
        $('.playbtn').css({'display':'none'});
        $('.pausebtn').css({'display':'inline-block'});
    }
})


$('.vol-control').click(function(){
    if(volon == true){
        volon = false;
        audio.volume = 0;
        $('.volon').css({'display':'none'});
        $('.voloff').css({'display':'inline-block'});
    } else {
        volon = true;
        audio.volume = 1;
        $('.volon').css({'display':'inline-block'});
        $('.voloff').css({'display':'none'});
    }

})


$('.change-small').click(function(){
    $('.big-player').stop().animate({'bottom':'-80px'});
    $('.small-player').stop().animate({'right':'0'});
})
$('.change-big').click(function(){
    $('.big-player').stop().animate({'bottom':'0'});
    $('.small-player').stop().animate({'right':'-300px'});
})

$('.close-btn').click(function(){
    $('.contents').stop().animate({'opacity':'0'}, function(){
        $('.contents').css({'z-index':'-9999'});
    })
    audio.pause();
    audio.currentTime = 0;
})


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
