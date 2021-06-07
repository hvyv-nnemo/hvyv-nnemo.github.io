$(document).ready(function(){
    $('.genre-btn').click(function(){
        $('#login').css({'z-index':'1'}).stop().animate({'opacity':'1'}, 400);
    });
    $('.close-btn').click(function(){
        $('#login').stop().animate({'opacity':'0'}, 400, function(){
            $('#login').css({'z-index':'-1'});
        });
    });

    var titleroll = ['<img src="./img/titleroll/hiphop.png">hiphop', '<img src="./img/titleroll/elec.png">electronic', '<img src="./img/titleroll/jazz.png">jazz', '<img src="./img/titleroll/metal.png">metal', '<img src="./img/titleroll/rock.png">rock', '<img src="./img/titleroll/pop.png">pop']


    function randomItem(a) {
        return a[Math.floor(Math.random() * a.length)];
    }

    // setInterval
    // console.log(randomItem(titleroll));

    setInterval(function(){
        $('#title-roll').html(randomItem(titleroll));
        // console.log(randomItem(titleroll)); 
    }, 2000);

});