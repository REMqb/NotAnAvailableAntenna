import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Antenna, StatusValue } from 'src/app/model/antenna';

@Component({
    selector: 'app-antenna-popup',
    templateUrl: './antenna-popup.component.html',
    styleUrls: ['./antenna-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AntennaPopupComponent implements OnInit {

    private antennaProp!: Antenna;

    dataDownSince = new Date();
    voiceDownSince = new Date();

    @Input()
    set antenna(antenna: Antenna) {
        this.antennaProp = antenna;

        if (antenna.status.data === StatusValue.Hs) {
            this.dataDownSince = new Date(antenna.downSince.data * 1000);
        }
        if (antenna.status.voice === StatusValue.Hs) {
            this.voiceDownSince = new Date(antenna.downSince.voice * 1000);
        }

        this.cd.markForCheck();
    }

    get antenna() {
        return this.antennaProp;
    }



    StatusValue = StatusValue;

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit() {
    }

}
