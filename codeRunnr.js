function updateOutput() {
	$("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

	document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}

$(".topBarBtn").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
});

$(".topBarBtn").click(function() {
	$(this).toggleClass("active");
	$(this).removeClass("hover");

	var panelId = $(this).attr("id") + "Panel";
	$("#" + panelId).toggleClass("hidden");
	var numActivePanels = 4 - $(".hidden").length;

	$(".panel").width(($(window).width() / numActivePanels) - 10);
});

$(".panel").height($(window).height() - $("topBar").height() - 50);

$(".panel").width(($(window).width() / 2) - 10);

$("textarea").on('change keyup paste', function() {
	updateOutput();
});

updateOutput();	