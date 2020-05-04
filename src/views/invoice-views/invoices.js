import { DialogController } from 'aurelia-dialog';
import { InvoiceService } from '../../_services/invoice-service';

export class Invoices {
  constructor() {
      this.invoiceService = new InvoiceService();
  }

  async attached() {
      this.invoices = await this.invoiceService.getInvoices();
      console.log(this.invoices);
  }

  // static inject = [DialogController];
  // person = { firstName: '' };
  // constructor(controller){
  //   $(document).ready(function() {
  //     $('.modal-btn').click(function() {
  //       $('.test-modal').modal('show');
  //       $('.test-modal').modal('setting', 'centered', false);
  //       $('.test-modal').modal('setting', 'closable', true);
  //     })
  //   });
  //   this.controller = controller;
  // }
  // activate(person){
  //   this.person = person;
  // }

}
