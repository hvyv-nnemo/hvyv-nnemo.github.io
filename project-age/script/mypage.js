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

