import { Hotels } from './../../hotels';
import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Input() hotel: Hotels;
  @Output() hotelToDelete: EventEmitter<Hotels>;
  @Output() updateHotel: EventEmitter<Hotels>;
  @HostBinding('attr.class') cssClass = 'row';

  constructor() {
   }

  ngOnInit() {
  }

  public deleteHotel(): void {
    this.hotelToDelete.emit(this.hotel);
    }
    public changeContent(): void {
    this.updateHotel.emit(this.hotel);
    }
    

}