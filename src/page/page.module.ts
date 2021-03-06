import { ResizeTableDirective } from './antd01/resizeTable.directive';
import { AntdShareModule } from './../share/antd-share.module';
import { Antd01Component } from './antd01/antd01.component';
import { Form01Component } from './form01/form01.component';
import { AuthInterceptor } from './auth-intercepor';
import { Http01Service } from './http01.service';
import { Http01Component } from './http01/http01.component';
import { Rxjs01Component } from './rxjs01/rxjs01.component';
import { Test03Component } from './test03/test03.component';
import { Test02Component, Dir } from './test02/test02.component';
import { PageRouteRoutes } from './page-route.routing';
import { Test01Component } from './test01/test01.component';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PageComponent } from './page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Pipe01Pipe } from './pipe01.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   imports: [
      CommonModule,
      PageRouteRoutes,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AntdShareModule
   ],
   declarations: [
      PageComponent,
      Test01Component,
      Test02Component,
      Dir,
      Test03Component,
      Rxjs01Component,
      Http01Component,
      Pipe01Pipe,
      Form01Component,
      Antd01Component,
      ResizeTableDirective
   ],
   providers: [
      Http01Service
   ]
})
export class PageModule { }