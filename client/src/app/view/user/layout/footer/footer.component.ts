import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ([...['./footer.component.css'], ...styleUrl])
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
