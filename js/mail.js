$(document).ready(function() {
	$("#basic").submit(function() {
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#btn').trigger('click');
			$("#basic").trigger("reset");
			console.log('ok');
		});
		return false;
	});	
});