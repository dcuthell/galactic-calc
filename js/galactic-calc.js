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


}
