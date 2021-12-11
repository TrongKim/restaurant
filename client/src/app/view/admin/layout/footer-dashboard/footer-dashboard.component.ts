import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-footer-dashboard',
  templateUrl: './footer-dashboard.component.html',
  styleUrls: ([...['./footer-dashboard.component.css'], ...styleUrl])
})
export class FooterDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
