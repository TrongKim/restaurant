import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ([...['./dashboard.component.css'], ...styleUrl])
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
