import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
// @ts-ignore
import * as brazilMap from 'src/assets/brazil_states_geo.json';

@Component({
  selector: 'app-map-states',
  templateUrl: './map-states.component.html',
  styleUrls: ['./map-states.component.css'],
})
export class MapStatesComponent implements OnInit {
  @Input() selectedState: string = '';
  mapOption: EChartsOption = {};

  ngOnInit(): void {
    this.mapFunction();
  }

  mapFunction(): void {
    echarts.registerMap('Brazil', brazilMap, {});
    this.mapOption = {
      title: {},
      regions: {
        name: 'Norte',
        selected: true,
        onRegionClick: null,
      },
      tooltip: {},
      toolbox: {},
      series: [
        {
          type: 'map',
          roam: false,
          map: 'Brazil',
          layoutCenter: ['50%', '50%'],
          layoutSize: 350,
          silent: true,
          select: {
            itemStyle: {
              areaColor: '#31d6c8',
            },
            label:{
              color: '#000',
              fontWeight: 'bold'
            }
          },
          emphasis: {
            label: {
              show: false,
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
}
