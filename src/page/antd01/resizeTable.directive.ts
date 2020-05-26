import { Directive, ElementRef, AfterViewInit, Host } from '@angular/core';

@Directive({
  selector: '[appResizeTable]'
})
export class ResizeTableDirective implements AfterViewInit {

  constructor(
    private hostEl: ElementRef
  ) { }


  ngAfterViewInit(): void {

    const tableEl = this.hostEl.nativeElement as HTMLElement ;
    const cols = tableEl.querySelectorAll('col');

    console.log(cols);
  }

}
