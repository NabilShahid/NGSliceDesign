import { INITIAL_REGISTRATION_DATA } from "./../constants/common-consts";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataAccessService {
  private hasCurrentData = false;
  private currentData: {
    [key: string]: string | number;
  } = {};

  private registrationData: Array<{
    [key: string]: string | number;
  }> = INITIAL_REGISTRATION_DATA;

  getCurrentData() {
    return this.currentData;
  }

  async getRegistrationData():Promise<Array<{
    [key: string]: string | number;
  }>> {
    await this.fakeWait();
    return this.registrationData;
  }

  updateDataValue(key, value) {
    this.currentData[key] = value;
  }

  setCurrentData(data) {
    this.currentData = data;
    this.hasCurrentData = true;
  }

  async submitData() {
    await this.fakeWait();
    this.registrationData.push(this.currentData);
    this.hasCurrentData = false;
  }

  hasData() {
    return this.hasCurrentData;
  }

  deleteRecent() {
    this.registrationData.splice(this.registrationData.length - 1, 1);
    this.registrationData = JSON.parse(JSON.stringify(this.registrationData));
  }
  deleteAll() {
    this.registrationData = [];
  }

  async fakeWait() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  constructor() {}
}
