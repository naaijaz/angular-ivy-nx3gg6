import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BootstempComponent } from './bootstemp/bootstemp.component';

import { HelloComponent } from './hello.component';
import { UserdetailMModule } from './userdetail-m/userdetail-m.module';

@NgModule({
  imports: [BrowserModule, UserdetailMModule, FormsModule],
  declarations: [AppComponent, HelloComponent, BootstempComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
