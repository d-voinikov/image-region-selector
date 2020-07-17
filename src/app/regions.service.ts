import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as rcolor from 'rcolor';

interface Type {
  name: string;
  color: string;
}

interface Region {
  type: string;
  dimensions: RegionDimensions;
  element: HTMLElement;
}

interface RegionDimensions {
  left: number;
  top: number;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  selectedRegionInfo$ = new BehaviorSubject({});
  selectedTypes$ = new BehaviorSubject([]);
  types$ = new BehaviorSubject([]);

  private types: Type[] = [];
  private regions: Region[] = [];

  constructor() {
    this.selectedTypes$.subscribe(types => {
      this.regions.forEach(region => {
        region.element.style.display = types.includes(region.type) ? 'block' : 'none';
      });
    });
  }

  createRegion(dimensions: RegionDimensions, type: string): Region {
    const typeObj = this.checkCreateType(type);
    const element = this.createRegionElement(dimensions, typeObj.color);
    const region = { element, dimensions, type };

    this.regions.push(region);

    return region;
  }

  private createRegionElement(dimensions: RegionDimensions, color: string): HTMLElement {
    const regionElement = document.createElement('div');

    regionElement.style.position = 'absolute';
    regionElement.style.top = `${dimensions.top}px`;
    regionElement.style.left = `${dimensions.left}px`;
    regionElement.style.height = `${dimensions.height}px`;
    regionElement.style.width = `${dimensions.width}px`;
    regionElement.style.opacity = '0.3';
    regionElement.style.backgroundColor = color;

    return regionElement;
  }

  private checkCreateType(typeName: string): Type {
    const existingType = this.types.find(({ name }) => name === typeName);

    if (existingType) {
      return existingType;
    }

    const type = { name: typeName, color: rcolor() };

    this.types.push(type);
    this.types$.next(this.types);

    return type;
  }
}
