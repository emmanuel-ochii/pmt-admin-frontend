import { Schedule } from './schedule';
import { Vehicle } from './vehicle';
import { User } from './user';

export class PmlWaybill {
    id: string;
    transaction_code: string;
    terminal_id: number;
    driver_id: User;
    vehicle_id: Vehicle;
    pmt_schedule_id: Schedule;
    pmt_route_id: number;
    pml_shipment_ids: number;
    total_charge: number;
    departure_date: string;
    authorized_by: number;
    authorized_date: Date
}
