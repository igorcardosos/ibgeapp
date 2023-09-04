import { Component, Input, OnInit } from '@angular/core';
import { OnChangeRegionService } from 'src/app/services/on-change-region.service';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
// @ts-ignore
import * as brazilMap from 'src/assets/brazil_regions_geo.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  mapOption: EChartsOption = {};
  @Input() InputselectedState: string | null = null;
  selectedState: string = '';

  constructor(private OnChangeRegionService: OnChangeRegionService) {}

  ngOnInit(): void {
    if (this.InputselectedState !== null) {
      this.selectedState = this.InputselectedState;
    }
    console.log(this.InputselectedState);
    console.log('Igor');
    this.mapFunction();
  }

  mapFunction(): void {
    echarts.registerMap('Brazil', brazilMap, {});
    this.mapOption = {
      title: {},
      regions: {
        name: 'NomeDaRegiao',
        selected: false,
        onRegionClick: this.onRegionClick,
      },
      tooltip: {},
      toolbox: {},
      series: [
        {
          type: 'map',
          roam: false,
          map: 'Brazil',
          layoutCenter: ['70%', '50%'],
          layoutSize: 400,
          select: {
            itemStyle: {
              areaColor: '#00a3be',
            },
            label: {
              color: '#fff',
            },
          },
          emphasis: {
            label: {
              show: true,
            },
            itemStyle: {
              areaColor: '#00a3be', // Action color
            },
          },
          data: [
            {
              name: this.selectedState,
              selected: true,
              itemStyle: {
                areaColor: '#31d6c8',
              },
            },
          ],
        },
      ],
    };
  }

  onRegionClick(event: any): void {
    const regionName = event.name;
    this.OnChangeRegionService.updateValue(regionName);
  }
}
