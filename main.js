$('.examples').hide();
 
$('.examples-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('.active');
    
	});
}
