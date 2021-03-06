import { Birthday } from './../js/galactic-calc.js';

describe('Birthday', function(){

  it('should test to see if Birthday takes date', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.bDate).toEqual(d);
  })

  it('should correctly return time elapsed since 1/1/70 in seconds', function(){
    const d = new Date("October 13, 2014 11:13:00");
    const e = new Date("October 13, 2014 11:13:01");
    const myBDay = new Birthday(d);
    const sameBDay = new Birthday(e);
    expect(myBDay.getSecondsLived()).not.toEqual(sameBDay.getSecondsLived());
  })

  it('should correctly return the difference between two birthdays in seconds', function(){
    const d = new Date("October 13, 2014 11:13:00");
    const e = new Date("October 13, 2014 11:13:01");
    const myBDay = new Birthday(d);
    const sameBDay = new Birthday(e);
    expect(myBDay.getAgeDifference(sameBDay)).toEqual(1);
  })

  it('should correctly return an age in years and days', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.getAgeInYearsAndDays()).toEqual('You are 0 years and 0 days old');
  })

  it('should correctly return an age in Mercury years', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.getAgeInYearsOnPlanet("Mercury")).toEqual('You are 0 years old on planet Mercury');
  })

  it('should correctly return an age in Venus years', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.getAgeInYearsOnPlanet("Venus")).toEqual('You are 0 years old on planet Venus');
  })

  it('should correctly return an age in Mars years', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.getAgeInYearsOnPlanet("Mars")).toEqual('You are 0 years old on planet Mars');
  })

  it('should correctly return an age in Jupiter years', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.getAgeInYearsOnPlanet("Jupiter")).toEqual('You are 0 years old on planet Jupiter');
  })

  it('should correctly return time left in seconds', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.getEstimatedTimeLeftInSeconds("Male")).toEqual((68.34*31557600));
  })

  it('should correctly return time left in seconds', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.calculateTimeInYearsAndDays(31557600)).toEqual("1 years and 0 days");
  })

  it('should correctly return a number of seconds in Jupiter time', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.calculateTimeOnPlanet(1000, "Jupiter")).toEqual(84.1751);
  })

  it('should correctly return years and days left to live on a planet', function(){
    const d = new Date();
    const myBDay = new Birthday(d);
    expect(myBDay.calculateTimeLeftOnPlanet("Male", "Jupiter")).toEqual("You have 5.7525 years left to live on planet Jupiter");
  })

  it('should correctly determine if the expected age has been surpassed', function(){
    const d = new Date("October 13, 1914 11:13:00");
    const myBDay = new Birthday(d);
    expect(myBDay.isDead()).toEqual(true);
  })

})
