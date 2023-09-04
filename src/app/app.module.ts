import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GetFedUnDataComponent } from './component/get-fed-un-data/get-fed-un-data.component';
import { GetCitiesDataComponent } from './component/get-cities-data/get-cities-data.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './component/cards/cards.component';
import { StateslistComponent } from './component/stateslist/stateslist.component';
import { RegionslistComponent } from './component/regionslist/regionslist.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MapComponent } from './component/map/map.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { MapStatesComponent } from './component/map-states/map-states.component';

@NgModule({
  declarations: [
    AppComponent,
    GetFedUnDataComponent,
    GetCitiesDataComponent,
    CardsComponent,
    StateslistComponent,
    RegionslistComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    MapStatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
