import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';
import { RegionsService } from './regions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentFile: string | ArrayBuffer =
    'http://localhost:4200/assets/images/Angular2-750x410.png';

  isSelectingRegion = false;

  config = {
    autoCrop: false,
    crop: (event) => this.imageCropped(event),
  };

  @ViewChild('angularCropper') private angularCropper: CropperComponent;

  constructor(
    private cdr: ChangeDetectorRef,
    private regionsService: RegionsService
  ) {}

  onCropperReady(): void {
    this.angularCropper.cropper.disable();
  }

  imageCropped(event: CustomEvent): void {
    this.regionsService.selectedRegionInfo$.next({ ...event.detail });
  }

  fileUploaded(file: string | ArrayBuffer): void {
    this.currentFile = file;
  }

  addRegion(): void {
    this.angularCropper.cropper.enable();
    this.angularCropper.cropper.crop();

    this.isSelectingRegion = true;
  }

  createRegion(type: string): void {
    const regionDimensions = this.angularCropper.cropper.getCropBoxData();
    const region = this.regionsService.createRegion(
      regionDimensions,
      type
    );

    (this.angularCropper.cropper as any).cropper.firstChild.appendChild(
      region.element
    );

    this.cancelSelecting();
  }

  cancelSelecting(): void {
    this.angularCropper.cropper.clear();
    this.angularCropper.cropper.disable();
    this.isSelectingRegion = false;
  }
}
