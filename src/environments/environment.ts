import { LatLngBoundsLiteral } from '@agm/core';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,

    googleMapApiKey: '',

    antennasApiURL: '',

    // I use france bounds by default
    defaultBounds: {
        north: 51.292795,
        west: -5.154943,
        south: 42.173758,
        east: 8.368508
    } as LatLngBoundsLiteral,

    refreshInterval: 1000 * 60 * 5 // 5 min
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
