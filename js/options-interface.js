// import  { Birthday } from './../build/js/vendor.min.js';
import { Birthday } from './../js/galactic-calc.js';

$(document).ready(function(){

  $("#options").hide();
  $("#refresh-age-difference").hide();
  $("#difference-results").hide();
  $("#planet-age-results").hide();
  $("#life-expectancy-results").hide();

  let myDate = null;
  let myBirthday = null;
  $("[name=bdate]").on("change", function () {
    myDate = new Date($(this).val());
    console.log(myDate, myDate.getTime());
    myDate.setHours(myDate.getHours() + 7); // Added to account for time zone difference!
    console.log(myDate, myDate.getHours());
    if(myDate.getTime() > 0){
      myBirthday = new Birthday(myDate);
      console.log("Bday Made!");
      $("#age-in-seconds").text("You are " + myBirthday.getSecondsLived() + " seconds old!");
    }
  });

  $("#refresh-age-seconds").click(function(){
    let newSeconds = myBirthday.getSecondsLived();
    $("#age-in-seconds").text("You are " + newSeconds + " seconds old!");
  });

  $("[name=another-date-input]").on("change", function () {
    anotherDate = new Date($(this).val());
    console.log(anotherDate, anotherDate.getTime());
    anotherDate.setHours(anotherDate.getHours() + 7); // Added to account for time zone difference!
    console.log(anotherDate, anotherDate.getHours());
  });

  $('#another-date-input').submit(function(event){
    event.preventDefault();
    let anotherDate = new Date($(this).val());
    $("#difference-results").text(myBirthday.getSecondsLived(anotherDate) + " seconds have elapsed between the two dates");
    $("#difference-results").show();
    $("#another-date-input").hide();
    $("#refresh-age-difference").show();
  });

  $("#refresh-age-difference").click(function(){
    $("#difference-results").hide();
    $("#another-date-input").show();
    $("#refresh-age-difference").hide();
  });




  $("[name=planet-input]").on("change", function () {
    anotherDate = new Date($(this).val());
    console.log(anotherDate, anotherDate.getTime());
    anotherDate.setHours(anotherDate.getHours() + 7); // Added to account for time zone difference!
    console.log(anotherDate, anotherDate.getHours());
  });

  $('#submit-planet-input').click(function(){
    let planetSelection = $("input[name=planet-radio]:checked").attr("value");
    console.log(planetSelection);
    $("#planet-age-results-field").text(myBirthday.getAgeInYearsOnPlanet(planetSelection));
    $("#planet-age-results").show();
    $("#planet-selector").hide();
    $("#refresh-planet-age").show();
  });

  $("#refresh-planet-age").click(function(){
    $("#planet-age-results").hide();
    $("#planet-selector").show();
    $("#refresh-planet-age").hide();
  });



  $('#submit-life-expectancy-input').click(function(){
    let planetSelection = $("input[name=planet-radio2]:checked").attr("value");
    let genderSelection = $("input[name=gender-radio]:checked").attr("value");
    console.log(planetSelection, genderSelection);
    $("#expectancy-results").text(myBirthday.calculateTimeLeftOnPlanet(genderSelection, planetSelection));
    if(myBirthday.isDead()){
      $("#dead-or-alive").text("Probably not ?");
    }else{
      $("#dead-or-alive").text("Probably ?");
    }
    $("#life-expectancy-results").show();
    $("#planet-selector2").hide();
    $("#gender-selector").hide();
    $("#refresh-life-expectancy").show();
  });

  $("#refresh-life-expectancy").click(function(){
    $("#life-expectancy-results").hide();
    $("#planet-selector2").show();
    $("#gender-selector").show();
    $("#refresh-life-expectancy").hide();
  });



});
