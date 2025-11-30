$(".headers").on("click", function() {
    $(".content").not($(this).parent().next()).slideUp(500)
    $(this).parent().next().toggle(500)
})

$(".icon-plus").on("click", function() {
    $(".content").not($(this).parent().next()).slideUp(500)
    $(this).parent().next().toggle(500)
})

