export class Birthday {
  constructor(bDate){
    this.bDate = bDate;
  }

  getSecondsLived(){
    let totalMilli = this.bDate.getTime();
    let currentDate = new Date();
    let elapsedTime = currentDate.getTime() - totalMilli;
    return (elapsedTime / 1000);
  }

  getAgeDifference(anotherBday){
    let myAge = this.getSecondsLived();
    let theirAge = anotherBday.getSecondsLived();
    let ageDiff = myAge - theirAge;
    return ageDiff;
  }

  getAgeInYearsAndDays(){
    let seconds = this.getSecondsLived();
    let x = seconds % 31557600;
    let years = (seconds - x)/31557600;
    let y = x % 86400;
    let days = (x - y)/86400;
    return "You are " + years + " years and " + days + " days old";
  }

  getAgeInYearsOnPlanet(planet){
    let multiplier = 0;
    if(planet == "Mercury"){
      multiplier = .24;
    }else if(planet == "Venus"){
      multiplier = .62;
    }else if(planet == "Mars"){
      multiplier = 1.88;
    }else if(planet == "Jupiter"){
      multiplier = 11.88;
    }else{
      multiplier = 1;
    }
    let seconds = this.getSecondsLived();
    let years = Number((seconds / (31557600 * multiplier)).toFixed(4));
    return "You are " + years + " years old on planet " + planet;
  }

  getEstimatedTimeLeftInSeconds(gender){
    let multiplier = 0;
    if(gender == "Male"){
      multiplier = 68.34;
    }else if(gender == "Female"){
      multiplier = 72.67;
    }else{
      multiplier = 71.5;
    }
    let seconds = this.getSecondsLived();
    let timeLeft = (multiplier * 31557600) - seconds;
    return timeLeft;
  }

  calculateTimeInYearsAndDays(seconds){
    let x = seconds % 31557600;
    let years = (seconds - x)/31557600;
    let y = x % 86400;
    let days = (x - y)/86400;
    return years + " years and " + days + " days";
  }

  calculateTimeOnPlanet(seconds, planet){
    let multiplier = 0;
    if(planet == "Mercury"){
      multiplier = .24;
    }else if(planet == "Venus"){
      multiplier = .62;
    }else if(planet == "Mars"){
      multiplier = 1.88;
    }else if(planet == "Jupiter"){
      multiplier = 11.88;
    }else{
      multiplier = 1;
    }
    return Number((seconds / multiplier).toFixed(4));
  }

  calculateTimeLeftOnPlanet(gender, planet){
    let earthSeconds = this.getEstimatedTimeLeftInSeconds(gender);
    let planetSeconds = this.calculateTimeOnPlanet(earthSeconds, planet);
    let planetYears = Number((planetSeconds/31557600).toFixed(4));
    return "You have " + planetYears + " years left to live on planet " + planet;
  }

  isDead(gender){
    let timeLeft = this.getEstimatedTimeLeftInSeconds(gender);
    if(timeLeft <= 0){
      return true;
    }else{
      return false;
    }
  }


}
