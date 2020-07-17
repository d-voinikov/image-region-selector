import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RegionInfoComponent } from './region-info/region-info.component';
import { ControlsComponent } from './controls/controls.component';
import { LetDirective } from './let/let.directive';
import { TypesComponent } from './types/types.component';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularCropperjsModule,
        MatToolbarModule,
        MatListModule
      ],
      declarations: [
        AppComponent,
        RegionInfoComponent,
        ControlsComponent,
        LetDirective,
        TypesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
