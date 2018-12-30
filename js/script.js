$(document).ready(function () {

	var url = "https://pixabay.com/api/";
	url += "?key=11135979-bc311ff4b07a17be5a899b0c2";

	var imageJSON = $.parseJSON($.ajax({
		url: url,
		dataType: "json",
		async: false
	}).responseText);

	var count = 0;
	imageJSON.hits.forEach(function () {
		var htmlBody = "";
		htmlBody += "<div class='col-6 col-sm-6 col-md-3 col-lg-3 card-design'>";
		htmlBody += "<div class='card' data-value=" + count + ">";
		htmlBody += "<img class='card-img-top' src='" + imageJSON.hits[count].largeImageURL + "' alt='Card image cap'>";
		htmlBody += "</div>";
		htmlBody += "</div>";

		var photoViewer = "";
		photoViewer += "<div class='carousel-item' id=photo" + count + ">";
		photoViewer += "<img class='d-block w-100' src=" + imageJSON.hits[count].largeImageURL + ">";
		photoViewer += "</div>";

		$("#image-loader").append(htmlBody);
		$("#photoViewer .carousel-inner").append(photoViewer);
		count++;
	});

	$(".card").click(function () {
		var photoValue = $(this).attr("data-value");
		$(".carousel-item").removeClass("active");
		$("#photo" + photoValue).addClass("active");
		$("#full-screen").fadeIn(300);
		$("html,body").addClass("body-noScroll");
	});

	$('.carousel').bcSwipe({
		threshold: 50
	});

	$(".closeFullScreen").click(function(){
		$("#full-screen").fadeOut(300);
		$("html,body").removeClass("body-noScroll");
	});

});