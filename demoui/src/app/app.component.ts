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
  toogleParagraph: Boolean = false;
  detailsLogList = new Array();
  logId: number  = 0;

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

  onDispalyDetails() {
    this.toogleParagraph = !this.toogleParagraph;
    this.logId++;
    this.detailsLogList.push(this.logId);
    console.log(this.detailsLogList);
  }
  
}
