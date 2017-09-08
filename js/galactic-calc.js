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


}
