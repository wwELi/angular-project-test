import { Subject, from, forkJoin } from 'rxjs';
import { TranslateService } from './../../share/translate.service';
import { Component, OnInit, Pipe, ElementRef } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { filter, map, tap, throttleTime, reduce, scan} from 'rxjs/operators';
import { fromEvent } from 'rxjs'

interface Options {
  label: string,
  value: string | number,
  checked: boolean
}

@Component({
  selector: 'app-antd01',
  templateUrl: './antd01.component.html',
  styleUrls: ['./antd01.component.less']
})
export class Antd01Component implements OnInit {


  checkOptionsOne: Options[] = [
    { label: 'Name', value: 'name', checked: true },
    { label: 'Age', value: 'age', checked: true },
    { label: 'Adress', value: 'adress', checked: true },
    { label: 'Action', value: 'action', checked: false },
  ]

  nzWidthConfig = ['20']

  isMousedown: boolean = false;
  resizeTarget!: HTMLElement
  headers$ = new Subject<Options[]>();
  prevPostionx!: number;

  headers: Options[];
  dataset: any[];

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(
    private i18n: TranslateService,
    private hostEl: ElementRef
  ) { 
  }

  ngOnInit() {

    this.headers$.pipe(
      map((data: Options[]) => data.filter(header => header.checked)),
      tap((data) => {
        // todo
      })
    )
    .subscribe((headers: Options[]) => {
      this.headers = headers;
      this.dataset = this.listOfData.map((data) => {
        return headers.map(header => data[header.value])
      });
    })

    this.headers$.next(this.checkOptionsOne);

    this.initResize();
  }


  updateSingleChecked() {
    this.headers$.next(this.checkOptionsOne);
  }

  private initResize() {
  }

  onMousedown(tpl: HTMLElement, evt: MouseEvent) {
    this.isMousedown = true;
    this.resizeTarget = tpl;
    this.prevPostionx = evt.x;
  }
}
