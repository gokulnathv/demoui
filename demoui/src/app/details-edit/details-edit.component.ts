import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.css']
})
export class DetailsEditComponent implements OnInit {

  @Output() addDetailEmmiter = new EventEmitter<{name: String, area: String}>();
  namefield: String = '';
  areafield: String = '';
  constructor() { }

  ngOnInit() {
  }

  addDetail() {
    console.log(this.namefield);
    console.log(this.areafield);
    this.addDetailEmmiter.emit({name: this.namefield, area: this.areafield});
  }
}
