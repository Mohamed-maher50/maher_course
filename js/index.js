/// <reference path="../typings/globals/jquery/index.d.ts"/>

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $(".page-section").each(function (i) {
      console.log($(this).position().top);
      if ($(this).position().top <= scrollDistance) {
        $(" li.active").removeClass("active");
        $(" li").eq(i).addClass("active");
      }
    });
  })
  .scroll();
