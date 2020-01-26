import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TransformService {
  constructor() {}
  addThousandSeperator = num =>
    num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  removeNonNumChars = num => num.replace(/\D/g, "");

  currencyTransform = num =>
    "$" + this.addThousandSeperator((+this.removeNonNumChars(num)).toString());
}
