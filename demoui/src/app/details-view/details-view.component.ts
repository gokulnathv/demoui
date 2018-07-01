import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  @Input() detailList: {name: String, area: String};

  constructor() { }

  ngOnInit() {
  }

}
