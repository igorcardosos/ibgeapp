import { Component, Input, OnInit } from '@angular/core';
import { FedUn } from 'src/app/fed-un';
import { OnChangeRegionService } from 'src/app/services/on-change-region.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-stateslist',
  templateUrl: './stateslist.component.html',
  styleUrls: ['./stateslist.component.css'],
})
export class StateslistComponent {
  @Input() FedUnData: FedUn[] = [];
  Region: string | null = null;
  @Input() SelectedRegion: string | null = null;

  constructor(
    public OnChangeRegionService: OnChangeRegionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  redirectToPage(stateacronym: string, state: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        sa: stateacronym,
        state : state
      }
    };
    this.router.navigate(['/citylist'],navigationExtras);
  }
}
