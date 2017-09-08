import { Birthday } from './../js/galactic-calc.js';

describe('Birthday', function(){

  it('should test to see if Birthday takes date', function(){
    let d = new Date();
    let myBday = new Birthday(d);
    expect(myBday.bDate).toEqual(d);
  })
})
