import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import { RegionsService } from '../regions.service';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ],
      providers: [
        RegionsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit correct typeName on create region', () => {
    const testTypeName = `${Math.random()}`;

    spyOn(component.createRegion, 'emit').and.callThrough();

    component.typeName.setValue(testTypeName);
    component.onAddRegion();
    component.onCreateRegion();

    expect(component.createRegion.emit).toHaveBeenCalledWith(testTypeName);
  });
});
