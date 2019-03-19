import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { BoxComponent } from './components/box/box.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CatalogComponent,
    BoxComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
