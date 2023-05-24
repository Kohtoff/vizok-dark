export type VehicleType = {
    type: VehicleTransportType;
    number: number;
    destination?: string;
    startPoint?: string;
}

export type VehicleTransportType = "bus" | 'train';
