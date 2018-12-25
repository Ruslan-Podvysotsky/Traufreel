$(function () {
    $('.today-navigation a').click(function () {
        $(this).parents('.today-tabs').find('.today-wrap').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false
    });
});

$('.slide__show').click(function () {
    $(this).parent().find('.slide__description').toggleClass('active');
    $(this).toggleClass('active');
    $('.slick-next').click(function(){
        $('.slide__description').removeClass('active');
        $('.slide__show').removeClass('active');
    });
    $('.slick-prev').click(function(){
        $('.slide__description').removeClass('active');
        $('.slide__show').removeClass('active');
    })
    
})



$(document).ready(function () {
    $('.slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]   
    })
})