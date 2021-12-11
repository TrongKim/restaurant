import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ([...['./sidebar.component.css'], ...styleUrl])
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
