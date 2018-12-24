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
})


$(document).ready(function () {
    $('.slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    })
})