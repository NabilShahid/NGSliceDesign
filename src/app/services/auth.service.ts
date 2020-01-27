import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}
  public userIsAdmin(): boolean {
    if (localStorage.getItem("IsAdmin") === "yes") return true;
    return false;
  }
}
