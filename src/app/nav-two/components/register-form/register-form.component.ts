import { DataAccessService } from "./../../../services/data-access.service";
import { Router } from "@angular/router";
import { ValidationService } from "./../../../services/validation.service";
import { FormField } from "./../../../types/types";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private validationService: ValidationService,
    private rtr: Router,
    private dataAccessService: DataAccessService
  ) {}
  formTouched = false; //fire validation flag
  formFields: {
    [key: string]: FormField;
  } = {
    Name: {
      Valid: false,
      InvalidText: "Value should be more than three characters"
    },
    Email: { Valid: false, InvalidText: "Email not valid" },
    Password: {
      Valid: false,
      InvalidText:
        "Password must contain a special character, an upper case character, a lower case character and a numeric character"
    },
    Amount: { Valid: true, InvalidText: "Value cannot be blank" }
  }; //field options

  formValues: {
    [key: string]: string;
  } = {
    Amount: "$0"
  }; //values store object
  validateName({ target: { name, value } }) {
    this.formValues[name] = value;
    this.formFields[name].Valid =
      this.validationService.minLength(value, 3) &&
      this.validationService.maxLength(value, 50);
  }
  validateEmail({ target: { name, value } }) {
    this.formValues[name] = value;
    this.formFields[name].Valid = this.validationService.email(value);
  }
  validatePassword({ target: { name, value } }) {
    this.formValues[name] = value;
    this.formFields[name].Valid =
      this.validationService.lowerCaseCharacter(value) &&
      this.validationService.numericCharacter(value) &&
      this.validationService.upperCaseCharacter(value) &&
      this.validationService.specialCharacter(value);
  }
  validateAmount({ target: { name, value } }) {
    this.formValues[name] = value;
  }

  /**
   * checks valid value of all form options
   */
  checkIfFormValid() {
    return Object.values(this.formFields).every(v => v.Valid);
  }
  /**
   * move data to serivce and navigate to confirmation page
   */
  goToConfirmation() {
    this.formTouched = true;
    if (this.checkIfFormValid()) {
      this.rtr.navigate(["navtwo", "register-confirm"]);
      this.dataAccessService.setCurrentData(this.formValues);
    }
  }
  ngOnInit() {}
}
