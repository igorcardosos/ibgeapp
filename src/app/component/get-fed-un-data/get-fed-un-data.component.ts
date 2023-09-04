import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FedUnApiService } from 'src/app/services/fed-un-api.service';
import { FedUn } from 'src/app/fed-un';
import { OnChangeRegionService } from 'src/app/services/on-change-region.service';

@Component({
  selector: 'app-get-fed-un-data',
  templateUrl: './get-fed-un-data.component.html',
  styleUrls: ['./get-fed-un-data.component.css'],
})
export class GetFedUnDataComponent implements OnInit {
  FedUnData: FedUn[] = [];
  StatesCount: number = 0;
  uniqueRegions: string[] = [];
  RegionCount: number = 0;
  selectedRegion: string | null = null;

  constructor(
    private http: HttpClient,
    private FedUnApiService: FedUnApiService,
    private OnChangeRegionService: OnChangeRegionService
  ) {}

  ngOnInit(): void {
    this.FedUnApiService.getDataFromAPI().subscribe((data) => {
      this.FedUnData = data;
      this.StatesCount = data.length;

      this.uniqueRegions = Array.from(
        new Set(data.map((uf) => uf.regiao.nome))
      );

      this.RegionCount = this.uniqueRegions.length;
    });
  }

  onChangeRegion() {
    this.selectedRegion = this.OnChangeRegionService.selectedRegion;
  }
}
