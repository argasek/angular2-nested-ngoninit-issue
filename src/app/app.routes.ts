import { Routes } from '@angular/router';
// import { ApplicationContainerComponent } from './application-container/application-container.component';
import { InnerComponent } from './inner/inner.component';
import { OtherComponent } from './other/other.component';
import { TestComponent } from './test/test.component';

export const ROUTES: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'other', component: OtherComponent },
];
