import { Component, OnInit } from '@angular/core';
import { RegionsService } from '../regions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region-info',
  templateUrl: './region-info.component.html',
  styleUrls: ['./region-info.component.scss'],
})
export class RegionInfoComponent implements OnInit {
  selectedRegionInfo$: Observable<any>;

  constructor(private regionsService: RegionsService) {}

  ngOnInit(): void {
    this.selectedRegionInfo$ = this.regionsService.selectedRegionInfo$.asObservable();
  }
}
