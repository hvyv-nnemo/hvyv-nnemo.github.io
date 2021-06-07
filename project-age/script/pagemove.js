var title = ['hiphop', 'jazz', 'pop', 'electronic', 'rock'];

function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}

// var titleBlank = document.getElementsByClassName('titleRoll');

var titleRoll = setInterval(function(){
    var randomTitle = randomItem(title);
    // document.getElementsByClassName('titleRoll').innerHTML = '';
    document.getElementById('titleRoll').innerHTML = randomTitle;
    console.log(randomTitle);
}, 2000);


$('.introBtn').click(function(){
    $('#intro').css({'display':'none'});
    clearInterval(titleRoll);
})

$('.btn2Login').click(function(){
    $('#loginpage').css({'z-index':'9995'});
})
$('.loginBtn').click(function(){
    $('#loginpage').css({'display':'none'});
    $('.btn2Login').addClass('hidden');
    $('.btn2Mypage').removeClass('hidden').addClass('block');
})

$('.btn2Mypage').click(function(){
    $('#mypage').css({'z-index':'9995'});
})

$('.btn2close').click(function(){
    $('#mypage').css({'z-index':'0'});
})

$('.btn1search').click(function(){
    $('#mypage').css({'z-index':'0'});
    $('#search').css({'z-index':'9995'});
})

$('.searchClose').click(function(){
    $('#search').css({'z-index':'0'});
})


$('.genre').click(function(){
    $('#main').css({'display':'none'});
}).mouseenter(function(){
    $(this).stop().animate({'width':'400px', 'height':'300px', 'line-height':'300px', 'margin':'-30px 0 0 -25px'});
}).mouseleave(function(){
    $(this).stop().animate({'width':'350px', 'height':'240px', 'line-height':'240px', 'margin':'0 0 0 0'});
})

$('.enterBtn').click(function(){
    $('#paint').css({'display':'none'});
})

$('.article').click(function(){
    $('#content').stop().animate({'top':'0'}, 400);
})

$('.closebtn').click(function(){
    $('#content').stop().animate({'top':'100%'}, 200);
})

$(".contentArea").on('mousewheel',function(e){

    var wheelDelta = e.originalEvent.wheelDelta;

    if(wheelDelta > 0){

        console.log("up");

        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

    }else{

    console.log("down");

        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

    }

});

$('#drag-area').draggable();


var drawBtnVal = false;



$('.drawBtn').click(function(){
    if(drawBtnVal == false) {
        drawBtnVal = true;
        $('.carousel-wrapper').stop().animate({'width':'600px', 'height':'80px', 'top':'55px', 'left':'calc(50% - 300px)'});
        $('.img-carousel').removeClass('big-slide').addClass('small-slide');
        $('.carousel-wrapper img').stop().animate({'width':'80px', 'height':'80px', 'margin-right':'30px'});
    } else {
        drawBtnVal = false;
        $('.carousel-wrapper').stop().animate({'width':'100%', 'height':'200px', 'top':'50%', 'left':'0'});
        $('.img-carousel').removeClass('small-slide').addClass('big-slide');
        $('.carousel-wrapper img').stop().animate({'width':'200px', 'height':'200px', 'margin-right':'60px'});
    }
})