$(window).on('load', function () {
    $("#loader-container").delay(750).fadeOut(750);
});

$(document).ready(function () {
    $(".control").click(function () {
        $(".control").removeClass("active");
        $(this).addClass("active");
    });

    $("#stylegan").click(() => window.open("https://github.com/willisguo14/StyleGAN/tree/main", "_blank"));
    $("#transformer").click(() => window.open("https://github.com/willisguo14/transformer-summarizer", "_blank"));
    $("#nst").click(() => window.open("https://github.com/willisguo14/neural-style-transfer", "_blank"));
    $("#insight").click(() => window.open("https://github.com/willisguo14/insights.io", "_blank"));
    $("#eth").click(() => window.open("projects/blockchain.pdf", "_blank"));

    $("#email").click(() => window.open("mailto:gwillis.guo@mail.utoronto.ca", "_blank"));
});

