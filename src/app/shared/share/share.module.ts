import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from 'src/app/home/home.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule, MatButtonModule, MatButtonModule,MatIconModule, MatToolbarModule
  ],
  exports: [MatButtonModule,MatIconModule, NavbarComponent]
})
export class ShareModule { }
