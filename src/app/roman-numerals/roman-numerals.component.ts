import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService} from './../services/roman-numerals.service'

@Component({
  selector: 'app-roman-numerals',
  templateUrl: './roman-numerals.component.html',
  styleUrls: ['./roman-numerals.component.css']
})
export class RomanNumeralsComponent implements OnInit {
public result: any;
public romanNumber: any;
  constructor( private romanNumeralsService: RomanNumeralsService ) { }

  ngOnInit() {
  }

  roman(number){
    console.log(`hola`);
    
   this.result = this.romanNumeralsService.arabicToRoman(number)
  }

}
