$(function() {

    $(window).scroll(function() {

        navbar = $(".navbar");

        if($(window).scrollTop() >= navbar.height())
        {
            if(navbar.hasClass("scrolled")){
                null
            } else {
                navbar.addClass("scrolled");
            }

        } else {
            navbar.removeClass("scrolled");
        }

    });

    // Deal with tabs
    $(".tab-switch li").click(function(){
        // Add selected class to active link
        $(this).addClass("selected").siblings().removeClass("selected");
        // Hide all divs
        $('.tab-content >  div').hide();
        // Sow div connected with this link
        $('.' + $(this).data('class')).show();
    });
});