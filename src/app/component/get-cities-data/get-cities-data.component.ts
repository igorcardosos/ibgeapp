import { Component, Input, OnInit } from '@angular/core';
import { CitiesApiService } from 'src/app/services/cities-api.service';
import { Cities } from 'src/app/cities';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FedUn } from 'src/app/fed-un';
import { OnChangeRegionService } from 'src/app/services/on-change-region.service';

@Component({
  selector: 'app-get-cities-data',
  templateUrl: './get-cities-data.component.html',
  styleUrls: ['./get-cities-data.component.css'],
})
export class GetCitiesDataComponent {
  citiesData: Cities[] = [];
  citiesCount: number = 0;
  @Input() FedUnData: FedUn[] = [];
  state: string = '';

  constructor(
    private CitiesApiService: CitiesApiService,
    private route: ActivatedRoute,
    private router: Router,
    private OnChangeRegionService: OnChangeRegionService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.state = params['state'];
      const sa = params['sa'];
      this.CitiesApiService.getDataFromAPI(sa).subscribe((data) => {
        this.citiesData = data;
        this.citiesCount = data.length;
      });
    });
  }

  redirectToPage() {
    this.OnChangeRegionService.updateValue('');
    this.router.navigate(['/']);
  }
}
