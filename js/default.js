$(document).ready(function()
{
	$('#content').bind('click', function(event) {
		if(this.hasClass('compact'))
		{
			this.removeClass('compact').addClass('expanded');
		} else
		{
			this.removeClass('expanded').addClass('compact');
		}
	});
});