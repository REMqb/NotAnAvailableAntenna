export interface AntennasRequestResult {
    antennas: { [key: string]: Antenna };
    lastUpdate: number;
}

export interface Antenna {
    lat: string;
    city: string;
    zipCode: string;
    long: string;
    downSince: DownSince;
    status: Status;
    id: string;
}

export interface DownSince {
    voice: number;
    data: number;
}

export interface Status {
    voice: StatusValue;
    data: StatusValue;
}

export enum StatusValue {
    Hs = 'HS',
    Up = 'unknown' // todo Unknown value, use != StatusValue.Hs for now
}
