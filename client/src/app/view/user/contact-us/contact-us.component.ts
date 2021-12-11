import { styleUrl } from '../styleUrl';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ([...['./contact-us.component.css'], ...styleUrl])
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
