import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, NEVER } from 'rxjs';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';
import { Antenna, AntennasRequestResult } from '../model/antenna';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AntennasService {

    antennasObservable: Observable<Map<string, Antenna>>;

    constructor(private http: HttpClient) {
        this.antennasObservable = interval(environment.refreshInterval).pipe(
            startWith(undefined),
            switchMap(() => {
                return this.http.get<AntennasRequestResult>(environment.antennasApiURL).pipe(
                    catchError(err => {
                        console.log(err);
                        return NEVER;
                    })
                );
            }),
            map(data => {
                console.log(data);
                return new Map<string, Antenna>(Object.entries(data.antennas));
            })
        );
    }
}
