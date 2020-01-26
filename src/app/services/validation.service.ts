import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidationService {
  constructor() {}
  
  minLength = (str: string, len: number) => str.length >= len;

  maxLength = (str: string, len: number) => str.length <= len;

  lowerCaseCharacter = (input: string) => /[a-z]/.test(input);

  upperCaseCharacter = (input: string) => /[A-Z]/.test(input);

  numericCharacter = (input: string) => /[0-9]/.test(input);

  specialCharacter = (input: string) =>
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(input);

  email = (input: string) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
