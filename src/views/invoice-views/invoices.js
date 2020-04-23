import {DialogController} from 'aurelia-dialog';
  
export class Invoices {
  static inject = [DialogController];
  person = { firstName: '' };
  constructor(controller){
    this.controller = controller;
  }
  activate(person){
    this.person = person;
  }
}

