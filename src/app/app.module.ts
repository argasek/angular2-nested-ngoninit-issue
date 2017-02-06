import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApplicationContainerComponent } from './application-container/application-container.component';
import { InnerComponent } from './inner/inner.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { TestComponent } from './test/test.component';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationContainerComponent,
    InnerComponent,
    OtherComponent,
    TestComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
