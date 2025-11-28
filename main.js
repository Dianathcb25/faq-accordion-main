$(".headers").on("click", function() {
    $(".content").not($(this).next()).slideUp()
    $(this).next().next().next().toggle(500)
})