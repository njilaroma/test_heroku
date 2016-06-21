$(function() {
  var animatedEls = $('.animated');

  animatedEls
    .on('appear', function() {
      var $el = $(this);
      var animationClass = $el.attr('data-animation-class');

      $el.addClass(animationClass);
    })
    .on('disappear', function() {
      var $el = $(this);
      var animationClass = $el.attr('data-animation-class');
      var animateOnce = $el.attr('data-animation-once');

      if (animateOnce !== 'true') {
        $el.removeClass(animationClass);
      }
    })
    .appear();
});
