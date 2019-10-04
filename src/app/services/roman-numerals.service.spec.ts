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
  it('Retorno del numero 3 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(3)).toEqual('III');
  });
  it('Retorno del numero 4 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(4)).toEqual('IV');
  });
  it('Retorno del numero 9 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(2)).toEqual('IX');
  });
  it('Retorno del numero 10 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(10)).toEqual('X');
  });
  it('Retorno del numero 15 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(15)).toEqual('xv');
  });
  it('Retorno del numero 19 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(19)).toEqual('XIX');
  });
  it('Retorno del numero 40 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(40)).toEqual('XL');
  });
  it('Retorno del numero 45 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(45)).toEqual('XLV');
  });
  it('Retorno del numero 50 en romano', ()=>{
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(19)).toEqual('XIX');
  });
});
