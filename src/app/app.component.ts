import { Component, ChangeDetectionStrategy, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { AntennasService } from './service/antennas.service';
import { AgmMap } from '@agm/core';
import { environment } from '../environments/environment';
import { Antenna } from './model/antenna';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'NotAnAvailableAntenna';

    @Input()
    map!: AgmMap;

    bounds = environment.defaultBounds;

    antennas?: Map<string, Antenna>;

    constructor(private antennasService: AntennasService, private cd: ChangeDetectorRef) {
        this.antennasService.antennasObservable.subscribe(data => {
            this.antennas = data;

            this.cd.markForCheck();
        });
    }

    trackFn(index: number, item: [string, Antenna]) {
        return item[0];
    }

}
