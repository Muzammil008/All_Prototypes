$(document).ready(function(){



}); // $(document).ready

// On Init
// Initialize Position of Pointer
var post = $('.section-posts .post-widget');
var totalPost = post.length;
var setPercentage = parseInt(100/totalPost)+'%';


$(window).on('load resize', function() {
    $('.ruler').empty();
    createRuler();
});

$(window).scroll(function(){

    $('.post-widget').each(function(){
        var positionTop = $(this).position().top;
        var positionBottom = positionTop + $(this).height();

        if( $(window).scrollTop() >= positionTop  &&  $(window).scrollTop() <= positionBottom )
        {
            $(this).addClass('active').siblings().removeClass('active');
        }
    });

    var getActiveNumber = parseInt($('.post-widget.active').attr('data-post-number'));
    var getPercentage = parseInt(100/totalPost) * getActiveNumber +'%';

    console.log(setPercentage);

    

    if($(window).scrollTop() > 10 ){
        $('.ruler').addClass('fixed');
        $('.ruler .pointer').css({'left':getPercentage});
    }
    else{
        $('.ruler').removeClass('fixed');
        $('.ruler .pointer').css({'left':0});
    }
    
});



function createRuler() {

    // Add Active Class
    //document.querySelectorAll('.post-widget')[0].classList.add('active');
    
    post.each(function(i){
        $(this).attr('data-post-number',i+1);
    });    
    
    setTimeout(function(){
       // $('.ruler .pointer').css({'left':setPercentage});
    },500);

    var $ruler = $('.ruler');
    $ruler.append('<div class="pointer"></div>');
    for (var i = 0, step = 0; i < $ruler.innerWidth() / 5; i++, step++) {
        var $tick = $('<div>');
        if (step == 0) {
            $tick.addClass('tickLabel').html(i * 5) ;
        } else if ([1, 3, 5, 7, 9].indexOf(step) > -1) {
            $tick.addClass('tickMinor');
            if (step == 9) {
                step = -1;
            }
        } else {
            $tick.addClass('tickMajor');
        }
        $ruler.append($tick);
    }
}