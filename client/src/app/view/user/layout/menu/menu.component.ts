import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ([...['./menu.component.css'], ...styleUrl])
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
