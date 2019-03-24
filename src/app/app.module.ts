import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { BoxComponent } from './components/box/box.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from './store/basket.reducer';
import { BasketComponent } from './components/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CatalogComponent,
    BoxComponent,
    FilterComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ basketState: basketReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
