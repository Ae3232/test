$(document).ready(function() {

	$('.selection_items-btn__change').on('click', function() {
        $('.selection_dialog').addClass('selection_dialog__show');
        $('.overlay').addClass('overlay__show');
    });
    $('.selection_items-btn__close').on('click', function() {
        $('.selection_dialog').removeClass('selection_dialog__show');
        $('.overlay').removeClass('overlay__show');
    });

	var popup = $(".selection_dialog");
    var overlay = $(".overlay");

	$(document).mouseup('load resize', function (e) {
        if (!popup.is(e.target)
            && popup.has(e.target).length === 0) { 
            popup.removeClass('selection_dialog__show'),
            overlay.removeClass('overlay__show')
        }
    });
    $(document).keydown(function(e){
        if (e.keyCode == 27) {
            popup.removeClass('selection_dialog__show'),
            overlay.removeClass('overlay__show')
        }
    });
    $('.selection_items-remove').on('click', function() {
        $(this).parent().remove();
    });
}); 