import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  arabicToRoman(arabic: number): String{
    let result = ""
    let one = "I" 
    let five = "V"
    let ten = "X"
    let fifty = "L"
    let hundred = "C"
    let fivehundred = "D"
    let thousand = "M"
    // for (let index = 0; index < arabic; index++) {
      
      
    // }
    result = one
    return result
  }
}
