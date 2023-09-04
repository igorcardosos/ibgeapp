import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnChangeRegionService {

  selectedRegion: string | null = null; ;

  constructor() { }

  updateValue(newValue: string) {
    this.selectedRegion = newValue;
  }
}
