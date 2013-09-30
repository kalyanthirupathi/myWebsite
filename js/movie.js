var movieArray = [];
var str = "";
// var movieStr="";
var resultList = [];

$(document).ready(function() {

	$("#search").click(function() {

		var text = $("#enterMovie").val();
		if (text == 0) {

			alert("enter movie name plzzz");
		} else

		{
			// search();
			searchMovie(text);

		}

	});

	$("#enterMovie").click(function() {
		$("#enterMovie").val('');
	});

	function search() {

		var movieName = $("#enterMovie").val();

		movieArray.push(movieName);

		console.log(movieArray.length);

	}

});

function searchMovie(movieName) {

	var str = "";

	$("#movie").html("getting movie  details, please standby...");

	var apiUrl = "http://api.themoviedb.org/3/search/movie?api_key=9a3cc6d14b4765b19587e229556ae226&query="
			+ movieName;

	console.log(apiUrl);

	$
			.ajax({
				url : apiUrl,
				dataType : "jsonp"
			})
			.done(
					function(result) {

						if (result.results.length > 0) {
							console.log(result);
							var resultList = [];
							var resultList = result.results;

							for (j = 0; j < resultList.length; j++) {

								if (resultList[j] !== null) {
									str = str + "<div class='movieList'";
									str = str + "movieId='" + resultList[j].id
											+ "'>"
											+ resultList[j].original_title;
									str = str
											+ "<div class='details' id='details"
											+ resultList[j].id
											+ "'><img src='http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500"
											+ resultList[j].poster_path
											+ "'/></div></div>";

								}

								else {
									continue;
								}
							}

							$("body").delegate(
									".movieList",
									"click",
									function() {

										var movieIndex = "#details"
												+ $(this).attr("movieId");
										console.log(movieIndex);
										$(movieIndex).show();

									});

						} else {
							str = "Sorry, no movies in our database with that name, please try again.."
						}

						$("#movie").html(str);
						

					}).fail(function() {
				console.log("Error occured");

				$("#movie").html("Internal Error occured. Please try again.");

			});
}
