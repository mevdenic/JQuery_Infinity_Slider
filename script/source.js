$(document).ready(() => {
    const leng = $(".top-row").children().length;
    const width = leng * 25;
  
    //container expansion
    $(".top-container").css("width", `${width}%`);
    $(".bottom-container").css("width", `${width}%`);
  
    //left scroll
    $('.button-left').on('click', () => {
      $('.button-left').prop('disabled', true);
      $('.button-right').prop('disabled', true);
      //last child width
      let childWidthTop = $(".top-row img").last().width() + 10;
      let childWidthBottom = $(".bottom-row img").last().width() + 10;
      $(".top-row").animate({
        left: "-" + childWidthTop
      }, 400, () => {
        $('.button-left').prop('disabled', false);
        $('.button-right').prop('disabled', false);
        $(".top-row").children().eq(-1).insertBefore($(".top-row").children().eq(0)).show("slow");
        $(".top-row").removeAttr("style");
      });
      $(".bottom-row").animate({
        left: "-" + childWidthBottom
      }, 400, () => {
        $(".bottom-row").children().eq(-1).insertBefore($(".bottom-row").children().eq(0)).hide().show();
        $(".bottom-row").removeAttr("style");
      });
    });
  
    //right scroll
    $('.button-right').on('click', () => {
      $('.button-left').prop('disabled', true);
      $('.button-right').prop('disabled', true);
      //first child width
      let childWidthTop = $(".top-row img").first().width() + 10;
      let childWidthBottom = $(".bottom-row img").first().width() + 10;
      $(".top-row").animate({
        right: "-" + childWidthTop
      }, 400, () => {
        $('.button-left').prop('disabled', false);
        $('.button-right').prop('disabled', false);
        $(".top-row").children().eq(0).insertAfter($(".top-row").children().eq(-1)).hide().show();
        $(".top-row").removeAttr("style"); 
      });
      $(".bottom-row").animate({
        right: "-" + childWidthBottom
      }, 400, () => {
        $(".bottom-row").children().eq(0).insertAfter($(".bottom-row").children().eq(-1)).hide().show();
        $(".bottom-row").removeAttr("style");
      });
    });
  });