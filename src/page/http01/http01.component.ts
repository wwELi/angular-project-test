import { Http01Service } from './../http01.service';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-http01',
  templateUrl: './http01.component.html',
  styleUrls: ['./http01.component.css']
})
export class Http01Component implements OnInit {

  constructor(private server: Http01Service) { }

  ngOnInit() {
    this.server.getInfo().pipe(retry(1)).subscribe(
      (data) => {
        console.log(data);
      },
      (e) => {
        console.log(e)
      },
      () => {
        console.log('complate')
      }
    )
  }

}
