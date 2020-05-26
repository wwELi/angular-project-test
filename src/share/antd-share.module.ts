import { TranslateService } from './translate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, NzI18nService, en_US } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

registerLocaleData(zh);

enum LANGUAGE {
  EN = 'en',
  CN = 'cn'
}



@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzEmptyModule,
    NzCheckboxModule
  ],
  declarations: [],
  exports: [
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    NzEmptyModule,
    NzCheckboxModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    TranslateService,
    { provide: LANGUAGE, useValue: LANGUAGE }
  ],
})
export class AntdShareModule {}
