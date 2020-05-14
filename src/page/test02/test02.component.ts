import { Subject, Observable, interval, ObservableInput, throwError, Subscription } from 'rxjs';
import { Component, OnInit, ContentChild, AfterContentInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { map, flatMap, take, takeWhile } from 'rxjs/operators';


@Component({
  selector: '[dir]',
  template: '<span>dir main</span><ng-content></ng-content>'
})
export class Dir {

  say() {
    console.log('hello')
  }

}

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.css']
})
export class Test02Component implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  @ViewChild(Dir) dir: Dir;


  nameSub: Subject<any> = new Subject<number>();

  subscribe!: Subscription;

  constructor() { }

  ngOnInit() {

    const sub = interval(1000).pipe(take(10), takeWhile((num) => !document.querySelector('#dd')));

    this.subscribe = sub.subscribe(
      (num) => {
        console.log(num);
      },
      (e) => {
        console.log('******');
        console.log(e)
      },
      () => {
        console.log('complete')
      }
    )

    console.log(sub)
  }


  ngAfterContentInit() {
    console.log(this.dir)
  }

  ngAfterViewInit() {
    console.log(this.dir)
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
