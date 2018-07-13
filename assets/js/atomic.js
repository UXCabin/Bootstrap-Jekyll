$( document ).ready(function(){
	$(document).bind('keydown', 'alt+s', showAtomic);
})

function showAtomic(){
	$('.atomic').toggle();
}
