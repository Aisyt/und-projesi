$(document).ready(function() {

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');


        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
            icon.addClass('shift-menu-icon');
            nav.addClass('shift-menu');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
            icon.removeClass('shift-menu-icon');
            icon.removeClass('shift-menu');
        }
    })

});