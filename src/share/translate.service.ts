import { NzI18nService, en_US, zh_CN } from 'ng-zorro-antd/i18n';
import { Injectable } from '@angular/core';

enum LANGUAGE {
  EN = 'en',
  CN = 'cn'
}

@Injectable()
export class TranslateService {

constructor(
  private i18n: NzI18nService
) {

  this.switchLanguage(LANGUAGE.CN);
 }

 public switchLanguage(language: LANGUAGE): void {

    const en = {
      ...en_US,
      Empty: {
        description: 'nonono....'
      },
      ww: 'test%name%'
    }

    this.i18n.setLocale(language === LANGUAGE.EN ? en : zh_CN);
 }

 public translate(path: string, data?: any): string {
   return this.i18n.translate(path, data);
 }

}
