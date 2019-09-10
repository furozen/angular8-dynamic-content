import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicContentOutletModule } from './dynamic-content-outlet/dynamic-content-outlet.module';
import {ModalModule} from './modal/modal.module';
import {HelloComponent} from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicContentOutletModule,
    ModalModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [HelloComponent]
})
export class AppModule {}
