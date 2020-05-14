import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component implements OnInit {

  form!: FormGroup;

  constructor(
    private bd: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.bd.group({
      name: ['', [
        Validators.required,
        (ctrl) => {
          return ctrl.value === 'www' ? null : { nameError: { msg: 'name input error' } };
        }
      ]],
      password: this.bd.group({
        p1: [],
        p2: []
      }, { validators: (group: FormGroup) => {
        
        const keys = Object.keys(group.value);
        const iterator = keys[Symbol.iterator]();
        let val!: IteratorResult<any>;

        while(!(val = iterator.next()).done) {
          if (!val.value) return null;

          if (group.value[val.value] !== group.value[iterator.next().value]) {
            return { pwd: { msg: 'password not some' } }
          }
        }
        
        return null;
      } })
    });
  }

  submit() {
    console.log('submit', this.form);
  }

  logForm() {
    console.log('form:  ', this.form);
  }

}
