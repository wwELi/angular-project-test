import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component implements OnInit, AfterViewInit {

  $loading: Subject<any>;

  args = { age: 1, tag: 'span' };

  @ViewChild('name', { static: false }) name: ElementRef<HTMLSpanElement>;

  constructor() { }

  ngOnInit() {


    console.log(this.name)

    this.$loading = new Subject<number>();
    this.$loading
    .pipe(debounceTime(200))
    .subscribe(num => {
      console.log(num);
    })
  }

  ngAfterViewInit() {

    console.log(this.name)
  }

  update() {
    // setTimeout(() => {
    //   this.$loading.complete();
    // }, 6 * 1000)
    this.$loading.next(Math.random());
  }

}
