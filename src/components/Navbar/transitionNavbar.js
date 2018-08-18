import $ from "jquery";

export const transition = () => {
  $(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $(".topnav").css("background", "#f4f4f4");
        $("ul").css("height", "auto");
        //$(".logo").css("max-height",'50%');
      } else {
        $(".topnav").css("background", "#000");
        $("ul").css("height", "auto");
        //$(".logo").css("max-height",'15%');
      }
    });
  });
};

export default transition;
