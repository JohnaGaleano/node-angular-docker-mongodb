import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  arabicToRoman(arabic: number): String {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in lookup ) {
      while ( arabic >= lookup[i] ) {
        roman += i;
        arabic -= lookup[i];
      }
    }
    return roman;
  }
}
