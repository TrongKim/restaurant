import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ([...['./elements.component.css'], ...styleUrl])
})
export class ElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
