$(document).ready(function(){
  $("#options").hide();
  let myDate = null;
  $("[name=bdate]").on("change", function () {
    myDate = new Date($(this).val());
    console.log(myDate, myDate.getTime());
});
});
