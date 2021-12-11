import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ([...['./about.component.css'], ...styleUrl])
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
