$(document).ready(function() {
	console.log("i m ready");

	$("#aboutMe").click(function() {
		$(".change").slideUp();
		$("#aboutMeDesc").slideDown();

	});

	$("#MyPortfolio").click(function() {
		$(".change").slideUp();
		$("#myPortfolioDesc").slideDown();

	});

	$("#footer").click(function() {
		$(".change").slideUp();
		$("#footerDesc").slideDown();
	});

	$("#aboutMeDesc").click(function() {

		$("#aboutMeDesc").slideUp();

	});
	$("#myPortfolioDesc").click(function() {

		$("#myPortfolioDesc").slideUp();
	});
		
});
