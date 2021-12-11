import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ([...['./home.component.css'], ...styleUrl])
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
