
import { map } from 'rxjs/operators';
import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { of, Observable, Subscription, Subject } from 'rxjs';


interface Params {
  value: string,
  args?: any
}

const mapping = {
  name: 'xxx${age}xxx${tag}x'
}

@Pipe({
  name: 'pipe01',
  pure: false
})
export class Pipe01Pipe implements PipeTransform, OnDestroy {

  private val?: any;
  private subjection: Subscription;
  private subject$: Subject<Params> = new Subject<Params>();

  constructor() {
    this.subjection = this.subject$
      .pipe(map(this.mappingValue))
      .subscribe(val => this.val = val)
  }

  transform(value: any, args?: any): string {
    this.subject$.next({ value, args });
    return this.val;
  }

  mappingValue({ value, args }) {

    const reg = /\${([^}]+)}/g;
    let match = null;
    const _mppVlaue = mapping[value] || '';
    let _mstr = _mppVlaue;

    while(match = reg.exec(_mppVlaue)) {
      const [m1, m2] = match;

      if (args && args[m2]) {
        _mstr = _mstr.replace(m1, args[m2]);
      }      
    }

    return _mstr;
  }

  ngOnDestroy() {
    this.val = null;
    this.subjection.unsubscribe();
  }

}
