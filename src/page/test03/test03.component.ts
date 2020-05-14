import { Component, OnInit, ElementRef, ViewEncapsulation, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test03',
  templateUrl: './test03.component.html',
  styleUrls: ['./test03.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.title]': 'isTitle'
  }
})
export class Test03Component implements OnInit {

  isTitle: boolean = true;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private hostRef: ElementRef
  ) { }

  ngOnInit() {

    console.log(this.hostRef)
    console.log(this.router);

    // this.activeRouter.params.subscribe((data) => {
    //   console.log(data);
    // })
    // this.activeRouter.paramMap.subscribe((data) => {
    //   console.log(data);
    // })
  }

  @HostListener('click')
  handlerClick() {
    console.log('--- be click ---');
  }

}
