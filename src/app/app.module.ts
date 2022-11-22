import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryService } from './services/in-memory.service';
import { LocaleService } from './services/locale.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LocaleService, InMemoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
