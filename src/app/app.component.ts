import {
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  currentFile: string | ArrayBuffer;
  selectedRegion: any = '';

  config = {
    autoCrop: false,
    ready: () => this.onCropperReady(),
    crop: event => this.imageCropped(event)
  };

  @ViewChild('angularCropper') private angularCropper: CropperComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  onCropperReady(): void {
    this.angularCropper.cropper.disable();
  }

  imageCropped(event): void {
    this.selectedRegion = {...event.detail};
    this.cdr.markForCheck();
  }

  resetImage(): void {
    this.currentFile = '';
  }

  onInputChange(input: HTMLInputElement): void {
    const files = input.files;

    if (!FileReader || !files || !files.length) {
      return;
    }

    const fr = new FileReader();

    fr.onload = () => {
      this.currentFile = fr.result;
      this.cdr.markForCheck();
    };
    fr.readAsDataURL(files[0]);
  }

  addRegion(): void {
    this.angularCropper.cropper.enable();
    this.angularCropper.cropper.crop();
  }
}
