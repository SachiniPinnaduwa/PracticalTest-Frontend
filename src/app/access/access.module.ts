import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/MaterialModule';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AccessModule {}
