import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    // NgbModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
