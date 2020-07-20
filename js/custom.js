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
// Accordion Js
// $(function () {
//   $(".panel-heading").on("click", function () {
//     $("#accordion").find("svg").attr("data-icon", "plus");
//   });

//   $("#accordion").on("shown.bs.collapse", function () {
//     $(this)
//       .find(".in")
//       .parent()
//       .find(".panel-heading")
//       .find("svg")
//       .attr("data-icon", "minus");
//   });
// });


$(document).ready(function(){
	// $(".panel-heading").on("click",function(){
	// 	console.log("clicked");
	// 	$("#collapseOne").toggle();
	// }

	$("#next-btn").on("click",function(){
		$(".item1.active").removeClass("active");
		$(".item1.active").next().addClass("active");
		

	})
})