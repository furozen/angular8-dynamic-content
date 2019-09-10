import { Component } from '@angular/core';
import {ModalService} from './modal/modal.service';
import {HelloComponent} from './hello/hello.component';

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

  constructor(private modalService: ModalService) {
  }

  async add() {
    console.log(await this.modalService.open(HelloComponent));
  }
}
