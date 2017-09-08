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

})
