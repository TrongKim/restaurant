import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ([...['./booking.component.css'], ...styleUrl])
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
