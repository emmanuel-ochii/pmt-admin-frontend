import {Terminal} from './terminal';

export class Route {
 id: string;
 category: string;
 fare_class1: number;
 fare_class2: number;
 fuel_litres_class1: number;
 fuel_litres_class2: number;
 driver_allowance: number;
 duration: number;
 trips: number;
 is_reservable: boolean;
 is_available: boolean;
 terminal1_id: Terminal;
 terminal2_id: Terminal;
 distance: number;
}