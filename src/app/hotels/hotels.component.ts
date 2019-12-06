import { Hotels } from './../../hotels';
import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Output() hotelToDelete: EventEmitter<Hotels> = new EventEmitter();;
  @Output() updateHotel: EventEmitter<Hotels> = new EventEmitter();;

  @HostBinding('attr.class') cssClass = 'row';
  @Input() hotel: Hotels;

  constructor() {

  }

  public deleteHotel(): void {
    this.hotelToDelete.emit(this.hotel);
  }
  public changeContent(): void {
    this.updateHotel.emit(this.hotel);
  }

  ngOnInit() {
  }
    

}