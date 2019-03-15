import { Route } from './route';
import { Vehicle } from './vehicle';

export class Schedule {
   id: string;
   vehicle_id: Vehicle;
   pmt_route_id: Route;
   departure_date: Date;
   schedule_status: string;
   is_reservable: boolean;
}