import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionInfoComponent } from './region-info/region-info.component';
import { LetDirective } from './let/let.directive';
import { ControlsComponent } from './controls/controls.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { TypesComponent } from './types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionInfoComponent,
    LetDirective,
    ControlsComponent,
    TypesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    AngularCropperjsModule,
    FormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
