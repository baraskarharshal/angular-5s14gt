import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { contries } from '../contries.config';

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent {

  form: FormGroup;
  contriesList = contries;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      contry: [null],
      contry2: [null],
    });
  }

  onSelect(event) {
    console.log(event);
  }

}