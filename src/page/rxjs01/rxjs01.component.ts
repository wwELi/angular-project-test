import { Component, OnInit } from '@angular/core';
import { Subject, of, interval, Observable } from 'rxjs';
import { tap, startWith, map, delay, zip, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs01',
  templateUrl: './rxjs01.component.html',
  styleUrls: ['./rxjs01.component.css']
})
export class Rxjs01Component implements OnInit {

  loading$: Subject<number> = new Subject<number>();

  time!: Observable<any>; 
  showTime!: Observable<boolean>; 

  constructor() { }

  ngOnInit() {

    this.loading$.pipe(
      startWith(20),
      delay(1000),
      tap(() => console.log('------ before -----')),
      map(num => num + 1)
    ).subscribe((result) => {
      console.log(`result is: ${result}`)
    })


    const example = zip(of(1), of(2))(of(3).pipe(delay(5000)))
    example.subscribe((data) => {
      console.log(data)
    })


    this.time = interval(1000).pipe(take(50));

    this.showTime = this.time.pipe(map((val) => val < 10))
  }

}
