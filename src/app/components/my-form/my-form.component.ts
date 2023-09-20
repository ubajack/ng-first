import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  formGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get nom() { return this.formGroup.get('nom'); }

  get email() { return this.formGroup.get('email'); }

  validation() {
    console.log(this.formGroup.value);
    if (this.formGroup.invalid) {
      console.error("Le formulaire n'est pas valide");
    }
  }
}
