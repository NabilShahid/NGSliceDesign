import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommunicationService {
  public navlinkUpdatedFromChild = new Subject();

  constructor() {}
}
