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
  formTouched = false;
  formFields: {
    [key: string]: FormField;
  } = {
    Name: { Valid: false, InvalidText: "Value cannot be blank" },
    Email: { Valid: false, InvalidText: "Value cannot be blank" },
    Password: { Valid: false, InvalidText: "Value cannot be blank" },
    Amount: { Valid: false, InvalidText: "Value cannot be blank" }
  };

  formValues: {
    [key: string]: string;
  } = {};
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
      this.validationService.specialCharacter(value) &&
      this.validationService.minLength(value, 5) &&
      this.validationService.maxLength(value, 100);
  }
  validateAmount({ target: { name, value } }) {
    this.formValues[name] = value;
    this.formFields[name].Valid =
      this.validationService.minLength(value, 1) &&
      this.validationService.maxLength(value, 100);
  }
  checkIfFormValid() {
    return Object.values(this.formFields).every(v => v.Valid);
  }
  goToConfirmation() {
    this.formTouched = true;
    if (this.checkIfFormValid()) {
      this.rtr.navigate(["navtwo", "register-confirm"]);
      this.dataAccessService.setCurrentData(this.formValues);
    }
  }
  ngOnInit() {}
}
