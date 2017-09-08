$(document).ready(function(){
  $('#bday-input').submit(function(event){
    event.preventDefault();
    $("#welcome").hide();
    $("#options").show();
    alert("1");
    let inputDate = $("bday-input").val().toDateString();
    let someString = inputDate.getFullYear()
    alert(inputDate);
    let someDate = new Date(inputDate);
    let myBirthday = new Birthday(someDate);
    alert("2");
    alert("I see " + myBirthday.getSecondsLived());
  })
});
