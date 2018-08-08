$('#couleur-fond').change(function(){

var cf = $('#couleur-fond option:selected').val();


  $('#contenu').css('background-color',cf);

});


  jQuery(document).ready(function(){
   jQuery.fn.center = function () {
   this.css("position","absolute");
   this.css("top", ( jQuery(window).height() - this.height() ) / 2  + "px");
   this.css("left", ( jQuery(window).width() - this.width() ) /  -5+ "px");
 
   return this;
}

jQuery('img').center();
});










    $(function() {
    $('img').first().fadeOut(2000, function suivante() {
        $(this).next('img').fadeOut(2000,suivante);
    });
  });






