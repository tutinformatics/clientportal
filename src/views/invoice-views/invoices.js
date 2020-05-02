import {DialogController} from 'aurelia-dialog';

export class Invoices {
  static inject = [DialogController];
  person = { firstName: '' };
  constructor(controller){
    $(document).ready(function() {
      $('.modal-btn').click(function() {
        $('.test-modal').modal('show');
        $('.test-modal').modal('setting', 'centered', false);
        $('.test-modal').modal('setting', 'closable', true);
      })
    });
    this.controller = controller;
  }
  activate(person){
    this.person = person;
  }

}

