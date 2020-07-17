import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSelectionList } from '@angular/material/list';
import { RegionsService } from '../regions.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  types$: Observable<any>;

  @ViewChild('types') typesSelection: MatSelectionList;

  constructor(private regionsService: RegionsService) {}

  ngOnInit(): void {
    this.types$ = this.regionsService.types$.asObservable();
  }

  typesSelectChanged(): void {
    this.regionsService.selectedTypes$.next(
      this.typesSelection.selectedOptions.selected.map((option) => option.value)
    );
  }
}
