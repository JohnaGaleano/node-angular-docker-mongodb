import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service).toBeTruthy();
  });

  it('Retorno del numero 1 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(1)).toEqual('I');
  });
  it('Retorno del numero 2 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(2)).toEqual('II');
  });
});
