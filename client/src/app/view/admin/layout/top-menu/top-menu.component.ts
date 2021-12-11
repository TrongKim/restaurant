import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ([...['./top-menu.component.css'], ...styleUrl])
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
