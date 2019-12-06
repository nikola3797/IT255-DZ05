import { Hotels } from './../../hotels';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dodaj-hotel',
  templateUrl: './dodaj-hotel.component.html',
  styleUrls: ['./dodaj-hotel.component.scss']
})
export class DodajHotelComponent implements OnInit {


  public hotelForm: FormGroup;
  @Output() hotelDodati: EventEmitter<Hotels>;

  constructor() { 
    this.hotelDodati = new EventEmitter();
  }

  ngOnInit() {
    this.intiForm();
  }

  public intiForm(){
    this.hotelForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      link: new FormControl('', [
        Validators.required
      ])
    });
  }
  public submitForm() {
    let title = this.hotelForm.get('title').value;
    let price = this.hotelForm.get('price').value;
    let video = new Hotels(title, price);
    this.hotelDodati.emit(video);
  }
}
