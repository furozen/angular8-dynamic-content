import { Component } from '@angular/core';
import {ModalService} from './modal/modal.service';
import {HelloComponent} from './hello/hello.component';
import {DialogService} from './dynamic-dialog/dialog/dialog.service';
import {ExampleComponent} from './dynamic-dialog/example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  components = [
    'DynamicSingleOneComponent',
    'DynamicMultipleOneComponent',
    'DynamicMultipleTwoComponent'
  ];

  selectedComponent = '';

  renderComponent() {}

  constructor(private modalService: ModalService, public dialog: DialogService) {

  }

  async add() {
    console.log(await this.modalService.open(HelloComponent));
  }

  showDialog(){
    const ref = this.dialog.open(ExampleComponent, { data: { message: 'I am a dynamic component inside of a dialog!' } });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

}
