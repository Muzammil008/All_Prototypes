var App = function(){

    var _pageAccounts = function(){        
        $('body').on('click', '.slide-header--card', function (e) {
              e.preventDefault();
              $(this).closest('.slide-header').toggleClass('changed');
              //alert('YES!');
        });
    }

    var _pageBlockCard = function(){
        $('body').on('click','.block-loader',function(e){
            e.preventDefault();
            $(this).addClass('waiting');
            setTimeout(() => {
              $(this).removeClass('waiting').addClass('activated');
            }, 2500);
        });        
    }

    var _pageExpenseChart = function(){
        $('body').on('click','.card',function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).closest('.scroll-content').addClass('changed');

            // Animation
            $('.card').each(function(e){
                var animation = $(this).attr('data-animation');
                $(this).find('.animated').addClass(animation);
            });
            
            // Hide Data
            $('.card:not(.active) .card--current-balance').hide();            

            setTimeout(function(){
                $('.card .wrap').hide();
            },800);
        });
    }

    var _pageOTP = function(){
        $('body').on('click','.toggleActionSheet',function(e){
            e.preventDefault();
            e.stopPropagation();
            $('.action-sheet').toggleClass('active');
        });

        $('body').click(function(e){
            $('.action-sheet').removeClass('active');
        });

        $('body').on('click','.action-sheet',function(e){
            e.stopPropagation();
        });
    }

    var _pageInputTextFocus = function(){
        $('body').on('click','.searchbar-input-container',function(e){
            $(this).closest('.ion-page').addClass('changed');
            //$('.header').fadeOut(300);
            $('.back-to-segment').fadeIn(300);
        });

        // Back to Segment
        $('body').on('click','.back-to-segment',function(e){
            //e.preventDefault();
            $('.ion-page').removeClass('changed');
            //$('.header').fadeIn(300);
            $('.back-to-segment').fadeOut(300);            
        });

        // On Click Item Content - Open
        $('body').on('click','.sli-item',function(){
            $(this).closest('.search-list--item').addClass('active').siblings().removeClass('active');
            $('.search-control').fadeOut(300);
            $('.scroll-content').addClass('freez');
        });

        // Close Item Content
        $('body').on('click','.search-list--item-close-btn',function(e){
            e.preventDefault();
            // e.stopPropagation();
            $(this).closest('.search-list--item').removeClass('active');
            $('.search-control').fadeIn(300);
            $('.scroll-content').removeClass('freez');
        });

        setInterval(function(){
            $('.search-list--item.active').scroll(function(e){
                ( $(this).scrollTop() > 20 ) ? $(this).addClass('animateAvatar') : $(this).removeClass('animateAvatar');
            });
        },500);

    }

    return {
        init: function(){
            _pageAccounts();
            _pageBlockCard();
            _pageExpenseChart();
            _pageOTP();
            _pageInputTextFocus();
        } // init
    }// return
}(); // App

$(document).ready(function(){

});

window.onload = function(){

    App.init();

};


// addEvent function by John Resig:
// http://ejohn.org/projects/flexible-javascript-events/

function addEvent( obj, type, fn ) {
    if ( obj.attachEvent ) {

        obj['e'+type+fn] = fn;
        obj[type+fn] = function(){obj['e'+type+fn]( window.event );};
        obj.attachEvent( 'on'+type, obj[type+fn] );
    } else {
        obj.addEventListener( type, fn, false );
    }
}

function getScrollY() {
    var  scrOfY = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
        //Netscape compliant
        scrOfY = window.pageYOffset;

    } else if( document.body && document.body.scrollTop )  {
        //DOM compliant
        scrOfY = document.body.scrollTop;
    } 
    return scrOfY;
}

// Script for example event goes here
addEvent(window, 'scroll', function(event) {

    var x = document.querySelectorAll('.search-list--item.active'); //document.getElementById("mydiv");

    var y = getScrollY();      
    if (y >= 100) {
        x.style.position = "fixed"; 
        x.style.top= "0";
    } 
});


