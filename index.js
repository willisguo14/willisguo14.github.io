$(window).on('load', function () {
    $("#loader-container").delay(750).fadeOut(750);
});

$(document).ready(function () {
    $(".control").click(function () {
        $(".control").removeClass("active");
        $(this).addClass("active");
    });
    $("#stylegan").click(() => window.open("https://github.com/willisguo14/StyleGAN/tree/main", "_blank"));
    $("#wgan").click(() => window.open("https://github.com/willisguo14/WGAN", "_blank"));
    $("#transformer").click(() => window.open("https://github.com/willisguo14/transformer-summarizer", "_blank"));
    $("#nmt").click(() => window.open("https://github.com/willisguo14/nmt-attention", "_blank"));
    $("#quora").click(() => window.open("https://github.com/willisguo14/siamese-network", "_blank"));
    $("#nst").click(() => window.open("https://github.com/willisguo14/neural-style-transfer", "_blank"));
    $("#cbow").click(() => window.open("https://github.com/willisguo14/Word2Vec-CBOW", "_blank"));
    $("#insight").click(() => window.open("https://github.com/willisguo14/insights.io", "_blank"));
    $("#cat").click(() => window.open("https://github.com/willisguo14/deep-nn", "_blank"));
    $("#eth").click(() => window.open("projects/blockchain.pdf", "_blank"));
});

