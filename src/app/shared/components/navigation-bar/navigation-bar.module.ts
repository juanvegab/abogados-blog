import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './navigation-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavigationBarComponent
  ],
  declarations: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
