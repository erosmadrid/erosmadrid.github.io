$('.examples').hide();
 
$('.examples').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('.examples');
    
	});
}
