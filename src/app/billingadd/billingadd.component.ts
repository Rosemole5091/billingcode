import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingCode } from '../models/billingcode'
@Component({
  selector: 'billingadd',
  templateUrl: './billingadd.component.html',
  styleUrls: ['./billingadd.component.css']
})
export class BillingaddComponent {

  List: Array<BillingCode> = [];
  billingObj: BillingCode = new BillingCode();

  errorbillingDescription = "";
  errorbillingCode = "";
  errordiscipline = "";
  errorrevenueCode = "";
  errorcpt = "";
  errormodifier = "";
  errorpayer = "";
  errorcharge= "";
  errorfrom= "";
  errorthrough= "";
  errorreceivable= "";
  errorcost= "";

  
  constructor() {
    
  }

  addBill() {
    try {
      if (this.billingObj.billingDescription == "") { this.errorbillingDescription = "BillingDescription required"; }

      if (this.billingObj.billingCode == "") { this.errorbillingCode = "billingCode required"; }

      if (this.billingObj.discipline == "") { this.errordiscipline = "discipline name required"; }

      if (this.billingObj.revenueCode == "") { this.errorrevenueCode = "revenueCode name required"; }

      if (this.billingObj.cpt == "" ) { this.errorcpt = "cpt required"; }

      if (this.billingObj.modifier == "") { this.errormodifier = "modifier required"; }
      
      if(this.billingObj.payer == "") {this.errorpayer="payer required";}

      if (this.billingObj.charge == "") { this.errorcharge = "charge required"; }

      if (this.billingObj.from == "") { this.errorfrom = "from required"; }

      if (this.billingObj.through  == "") { this.errorthrough = "through required"; }

      if (this.billingObj.receivable == "") { this.errorreceivable = "receivable required"; }

      if (this.billingObj.cost == "") { this.errorcost = "cost required"; }

      this.List.push(this.billingObj);
      console.log(this.List);
    }
    catch (error) {
      console.log("error")
    }
  }
}
