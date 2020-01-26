import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataAccessService {
  private hasCurrentData=false;
  private currentData: {
    [key: string]: string;
  } = {};

  private registrationData: Array<{
    [key: string]: string;
  }> = [];

  getCurrentData() {
    return this.currentData;
  }

  setCurrentData(data) {
    this.currentData = data;
    this.hasCurrentData=true;
  }

  submitData() {
    this.registrationData.push(this.currentData);
    this.hasCurrentData=false;
  }

  hasData(){
    return this.hasCurrentData;
  }

  constructor() {}
}
