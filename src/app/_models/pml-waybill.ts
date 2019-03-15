export class PmlWaybill {
    id: string;
    transaction_code: string;
    terminal_id: number;
    driver_id: number;
    vehicle_id: number;
    pmt_schedule_id: number;
    pmt_route_id: number;
    pml_shipment_ids: number;
    total_charge: number;
    departure_date: string;
    authorized_by: number;
    authorized_date: Date
}
