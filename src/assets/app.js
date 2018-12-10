


  // window.onload = function(){

  //   // $('body').on('hover','.form-input',function () {
  //   //   $(this).parents('.form-group').addClass('focused');
  //   // });

  //   $('body').on('focus','.form-input',function () {
  //     $(this).parents('.form-group').addClass('focused');
  //   });

  //   $('body').on('blur','.form-input',function () {
  //     var inputValue = $(this).val();
  //     if (inputValue == "") {
  //       $(this).removeClass('filled');
  //       $(this).parents('.form-group').removeClass('focused');
  //     } else {
  //       $(this).addClass('filled');
  //     }
  //   });

  // };

  $('.form-js-label').find('input').on('input', function (e) {
    $(e.currentTarget).attr('data-empty', !e.currentTarget.value);
  });

  // var post = $('.section-posts .post-widget');
  // var totalPost = post.length;
  // var setPercentage = parseInt(100/totalPost)+'%';

$(window).on('load resize', function() {
    $('.ruler').empty();
    createRuler();
});

function createRuler() {

  // Add Active Class
 // document.querySelectorAll('.post-widget')[0].classList.add('active');
  
  // post.each(function(i){
  //     $(this).attr('data-post-number',i+1);
  // });    
  
  // setTimeout(function(){
  //     $('.ruler .pointer').css({'left':setPercentage});
  // },500);

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

