(function ($) {
	// body...
	var Body = $("body"),Window = $(window),Interfa = $("#interfa");
	var BODY_HEIGHT = Body.height();
	var WIN_HEIGHT = Window.height();
	if (Interfa.height()<BODY_HEIGHT) {
		Interfa.css("minHeight",BODY_HEIGHT);
	};
})(jQuery);