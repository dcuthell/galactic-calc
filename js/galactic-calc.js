export class Birthday {
  constructor(bDate){
    this.bDate = bDate;
  }

  getSecondsLived(){
    let totalMilli = this.bDate.getTime();
    return (totalMilli * 1000);
  }
}
