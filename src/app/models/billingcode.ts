export class BillingCode {
    billingDescription: string;
    billingCode: string;
    discipline: string;
    markInactive: boolean;
    revenueCode: string;
    cpt: string;
    modifier: string;
    payer: string;
    billable: boolean;
    charge: string;
    from: string;
    through: string;
    receivable: string;
    cost: string;

    constructor() {
        this.billingDescription = "";
        this.billingCode = "";
        this.discipline = "";
        this.markInactive = false;
        this.revenueCode = "";
        this.cpt = "";
        this.modifier = "";
        this.payer = "";
        this.billable = false;
        this.charge = "";
        this.from = "";
        this.through = "";
        this.receivable = "";
        this.cost = "";

    }

} 