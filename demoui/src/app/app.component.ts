import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: String = '';
  enableResetBtn: Boolean = false;
  enableh3tag: Boolean = false;

  onNameEntered() {
      this.enableResetBtn = this.name ? true : false;
  }

  onResetBtnClick() {
    this.name = '';
    this.onNameEntered();
    this.enableh3tag = false;
  }
  
  onSubmitButtonClick() {
    this.enableh3tag = true;
  }
  
}
