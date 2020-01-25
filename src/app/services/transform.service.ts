import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TransformService {
  constructor() {}
  currencyTransform = num =>
    "$" + num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
