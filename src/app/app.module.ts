import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SongsOverviewPageComponent } from './pages/songs-overview-page/songs-overview-page.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMenueComponent } from './components/app-menue/app-menue.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SongsOverviewPageComponent,
    AppHeaderComponent,
    AppMenueComponent,
    EventPageComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
