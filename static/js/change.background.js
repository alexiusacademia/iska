(function($){
  $(function(){
    var intro = $('#intro'),
      adventures = $('#adventures'),
      refresh = $('#refreshing'),
      projects = $('#projects'),
      body = $('body'),
      bg = $('#bg')
      close = $('.close');

    body.click(() => {
      if (body.hasClass('is-article-visible')) {
        bg.attr('style', 'background-image: url("/images/bg.jpg")');
      }
    });

    close.click(() => {
      bg.attr('style', 'background-image: url("/images/bg.jpg")');

    });

    intro.click(() => {
      bg.attr('style', 'background-image: url("/images/bg.jpg")');
    });

    adventures.click(() => {
      bg.attr('style', 'background-image: url("/images/pinatubo_crater_sign.jpg")');
    });

    refresh.click(() => {
      bg.attr('style', 'background-image: url("/images/new_side_of_stroke.jpg")');
    });

    projects.click(() => {
      bg.attr('style', 'background-image: url("/images/new_side_of_harvest.jpg")');
    });

  });
})(jQuery);
