import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nameForm: FormGroup;
  items: FormArray;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.nameForm = this.fb.group({
      items: this.fb.array([ this.createItem() ])
    });
  }

  createItem() {
    return this.fb.group({
      label: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  addItem() {
    this.items = this.nameForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  getItems() {
    console.log(this.nameForm.get('items')['controls']);
  }

  getItemsValues() {
    const formGroups = this.nameForm.get('items')['controls'];
    const valuesArray = [];

    for (const group of formGroups) {
      valuesArray.push(group.value);
    }

    console.log('valuesArray', valuesArray);
  }

}
