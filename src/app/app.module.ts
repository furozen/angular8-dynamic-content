import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicContentOutletModule } from './dynamic-content-outlet/dynamic-content-outlet.module';
import {ModalModule} from './modal/modal.module';
import {HelloComponent} from './hello/hello.component';
import {DialogModule} from './dynamic-dialog/dialog/dialog.module';
import {ExampleComponent} from './dynamic-dialog/example/example.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, ExampleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicContentOutletModule,
    ModalModule,
    DialogModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [HelloComponent, ExampleComponent]
})
export class AppModule {}
