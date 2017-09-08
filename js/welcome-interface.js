$(document).ready(function(){

  $('#bday-input').submit(function(event){
    event.preventDefault();
    $("#welcome").hide();
    $("#options").show();
  })
});
