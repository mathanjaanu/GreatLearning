$(window).scroll(function() {
	var window_height = $(window).height();
	console.log(window_height);
	if ($(this).scrollTop() > window_height) { // this refers to window
		$("#sticky").fadeIn("500");
	}
	else{
		$("#sticky").fadeOut("500");
	}
});

$(window).on("load",function() {
	$("#dropdown").trigger("hover");
});




// Accordion Js
$(function () {
  $(".panel-heading").on("click", function () {
    $("#accordion").find("svg").attr("data-icon", "plus");
  });

  $("#accordion").on("shown.bs.collapse", function () {
    $(this)
      .find(".in")
      .parent()
      .find(".panel-heading")
      .find("svg")
      .attr("data-icon", "minus");
  });
});
