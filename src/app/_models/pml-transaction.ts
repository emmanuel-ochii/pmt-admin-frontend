export class PmlTrasaction {
    id: string;
    transaction_date: Date;
    terminal_id: number;
    shipment_id: number;
    customer_id: number;
    payable: number;
    transportation_expenses: number;
    taxi_expenses: number;
    feeding_expenses: number;
    payment_method: string;
    transaction_status: string;

}