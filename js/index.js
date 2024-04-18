let aboutSection = $("#about").offset().top;

$(window).scroll(function () {
    let windowOffset = $(window).scrollTop(); // Add parentheses after scrollTop

    if (windowOffset > aboutSection) {
        $(".navbar").css({ backgroundColor: "red" });
    } else {
        $(".navbar").css({ backgroundColor: "white" }); // Reset background color when not scrolled past
    }
});
