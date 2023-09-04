import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OnChangeRegionService } from 'src/app/services/on-change-region.service';

@Component({
  selector: 'app-regionslist',
  templateUrl: './regionslist.component.html',
  styleUrls: ['./regionslist.component.css'],
})
export class RegionslistComponent implements OnInit {
  @Input() uniqueRegions: string[] = [];
  selectedRegion: string | null = null;
  @Output() changeRegion: EventEmitter<any> = new EventEmitter();

  constructor(private OnChangeRegionService: OnChangeRegionService) {}

  ngOnInit(): void {
    this.selectedRegion = this.OnChangeRegionService.selectedRegion;
  }

  selectRegion(region: string) {
    this.selectedRegion = region;
    this.OnChangeRegionService.updateValue(region);
  }

  handleClick() {
    this.changeRegion.emit();
  }
}
