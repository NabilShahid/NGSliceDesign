import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TransformService {
  constructor() {}
  addThousandSeperator = (num: string) =>
    num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  removeNonNumChars = (num: string) => num.replace(/\D/g, "");

  numberToCurrencyTransform = (num: string) =>
    "$" + this.addThousandSeperator((+this.removeNonNumChars(num)).toString());

  currencyToNumber = (str: string) => +str.replace("$", "").replace(/,/g, "");
}
