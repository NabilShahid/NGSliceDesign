import { Component, OnInit } from '@angular/core';
import { REGISTER_INSTRUCTION } from '../../../constants/common-consts';

@Component({
  selector: 'app-register-instructions',
  templateUrl: './register-instructions.component.html',
  styleUrls: ['./register-instructions.component.css']
})
export class RegisterInstructionsComponent implements OnInit {
  registerInstructionsList=REGISTER_INSTRUCTION
  constructor() { }

  ngOnInit() {
  }

}
