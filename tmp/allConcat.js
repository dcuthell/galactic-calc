$(document).ready(function(){
  $("#options").hide();
  let myDate = null;
  $("[name=bdate]").on("change", function () {
    myDate = new Date($(this).val());
    console.log(myDate, myDate.getTime());
});
});

$(document).ready(function(){
  $('#time').text(moment());
});

$(document).ready(function(){

  $('#bday-input').submit(function(event){
    event.preventDefault();
    $("#welcome").hide();
    $("#options").show();
  })
});
