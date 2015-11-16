
$(document).ready(function() {
      // JQUERY NAV TOGGLE
      $('#icon').bind('click',function(event){
          $('.mainnav').slideToggle();

				$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({
					scrollTop:$(this.hash).offset().top}, 
					500
					);
				});

		});
  });