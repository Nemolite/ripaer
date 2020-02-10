

 $(document).ready(function(){

   $(".menu__icon")
       .click(
          function()
          {
          	 $(".menu__links").toggle(600);
           }
        );
   });


 $(function(){
  $('.slides').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});
