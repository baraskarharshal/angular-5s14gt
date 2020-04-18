import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { contries } from '../contries.config';

@Component({
  selector: "app-simple-ng-select",
  templateUrl: "./simple-ng-select.component.html",
  styleUrls: ["./simple-ng-select.component.css"]
})
export class SimpleNgSelectComponent {
  form: FormGroup;
  contriesList = contries;
  selected: any;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      contry: [null]
    });
  }

  onSelect(event) {
    console.log(event);
    this.selected = event;
  }

}
