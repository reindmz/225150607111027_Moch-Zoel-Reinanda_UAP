$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function (e) {
        e.preventDefault();
        const targetId = $(this).attr("href");
        const targetOffset = $(targetId).offset().top;
        $("html, body").animate(
            {
                scrollTop: targetOffset - $(".navbar").outerHeight(),
            },
            1000
        );
    });

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});
