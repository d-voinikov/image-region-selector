import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map, combineLatest } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { RegionsService } from '../regions.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() isSelectingRegion = false;

  @Output() fileUploaded = new EventEmitter<string | ArrayBuffer>();
  @Output() addRegion = new EventEmitter<void>();
  @Output() createRegion = new EventEmitter<string>();
  @Output() cancelSelecting = new EventEmitter<void>();

  regionType = '';
  filteredRegionTypes: Observable<{}[]>;
  typeName = new FormControl();

  constructor(private regionsService: RegionsService) {}

  ngOnInit(): void {
    this.filteredRegionTypes = this.typeName.valueChanges.pipe(
      startWith(''),
      combineLatest(this.regionsService.types$),
      map(([value, options]) => this.filter(value, options))
    );
  }

  onAddRegion(): void {
    this.addRegion.emit();
  }

  onCreateRegion(): void {
    this.createRegion.emit(this.typeName.value);
    this.typeName.setValue('');
  }

  onCancelSelecting(): void {
    this.cancelSelecting.emit();
  }

  onInputChange(input: HTMLInputElement): void {
    const files = input.files;

    if (!FileReader || !files || !files.length) {
      return;
    }

    const fr = new FileReader();

    fr.onload = () => {
      this.fileUploaded.emit(fr.result);
    };
    fr.readAsDataURL(files[0]);
  }

  private filter(value: string, options: any): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
