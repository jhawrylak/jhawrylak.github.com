$(document).ready(function()
{
	$('#contact').bind('click', function(event) {
		if($('#contact').hasClass('compact'))
		{
			$('#contact').removeClass('compact').addClass('expanded');
		} else
		{
			$('#contact').removeClass('expanded').addClass('compact');
		}
	});
});