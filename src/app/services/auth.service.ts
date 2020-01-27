import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}
  public userIsAdmin(): boolean {
    return false;
  }
}
