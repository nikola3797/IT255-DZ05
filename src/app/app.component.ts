import { Hotels } from './../hotels';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 

  @Input() hotels: Hotels[] = [new Hotels('Hilton', 200), new Hotels('Crown Plaza', 400), new Hotels('Hayatt', 1000), new Hotels('HolidayIn', 100)];
  
  constructor() { 
     
   }


   dodajHotel(title: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Dodavanje hotela, naziv: ${title.value}, cena: ${price.value}`);
    this.hotels.push(new Hotels(title.value, price.valueAsNumber));
    return false;
  }


  public deleteHotel(hotels: Hotels): void {
    this.hotels = this.hotels.filter(item => {
      return item.title !== hotels.title
    })
  }

  public _generateString(length) {
    let result = '';
    let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }
    
  
    public changeContent(hotels: Hotels): void {
      let index = this.hotels.findIndex(i => i.title === hotels.title);
      this.hotels[index].title = this._generateString(6);
    }

  public changeOrder(): void {
    this.hotels = this.shuffleArray(this.hotels);
  }

  public shuffleArray = function (array) {
    var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  ngOnInit() {
  }
}