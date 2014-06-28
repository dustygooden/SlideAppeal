//SlideZilla
$(document).ready(function () {
	
	//Check for #toggleButton to be displayed
	if($('#toggleButton').css('display') == 'none'){
		console.log("returning")
		return;
	}
	
	//If it got here, then it is displayed
	
	$('#main-ul').hide();
	
	$( "#toggleButton" ).click(function() {
		
		$( "#main-ul" ).slideToggle( "slow", function() {
			// Animation complete.
		});
	});
	
});