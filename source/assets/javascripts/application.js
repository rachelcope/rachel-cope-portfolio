//= require_tree .

$(document).ready(function(){
  $.jribbble.getShotsByPlayerId('rachelcope', function (playerShots) {
		var html = [];
		$.each(playerShots.shots, function (i, shot) {
      html.push('<li><a href="' + shot.url + '"><img src="' + shot.image_teaser_url + '" ');
			html.push('alt="' + shot.title + '"></a></li>');
		});

		$('.jribbble').html(html.join(''));
	}, {page: 1, per_page: 8});

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  $(function() {
    var animate_icon;

    if ($(".animate").length > 0) {
      animate_icon = function() {
        return $(".animate").each(function(i, el) {
          var $el;
          $el = $(el);

          if ($el.visible(true, true)) {
            return $el.addClass("animated");
          } else {
            return $el.removeClass("animated");
          }
        });
      };

      animate_icon();

      return $(window).scroll(function(event) {
        return animate_icon();
      });
    }
  });

});
