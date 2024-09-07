import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  allTickets:Ticket[]=[]
  constructor() { 
    this.allTickets = [
      { userAvatar:'assets/files/male-student.png',ticket: 'pdf.45  تذكرة رقم', purchaseCount: 'مرة واحدة', price: 40, people: 1, cinemas: 'سينما مصر, مول العرب, بوابة رقم...', ticketNumber: 'C-101', userName: 'أحمد محمود', userPhone: '0123456789' },
      { userAvatar:'assets/files/male-student.png',ticket: 'pdf.45  تذكرة رقم', purchaseCount: 'مرة واحدة', price: 30, people: 1, cinemas: 'سينما مصر, مول العرب, بوابة رقم...', ticketNumber: 'C-102', userName: 'محمد أحمد', userPhone: '0123456789' },
      { userAvatar:'assets/files/male-student.png',ticket: 'pdf.45  تذكرة رقم', purchaseCount: 'مرة واحدة', price: 45, people: 1, cinemas: 'سينما مصر, مول العرب, بوابة رقم...', ticketNumber: 'C-103', userName: 'محمد العتيب', userPhone: '0123456789' },
      { userAvatar:'assets/files/male-student.png',ticket: 'pdf.45  تذكرة رقم', purchaseCount: 'مرة واحدة', price: 54, people: 1, cinemas: 'سينما مصر, مول العرب, بوابة رقم...', ticketNumber: 'C-104', userName: 'محمد العتيب', userPhone: '0123456789' }
    ];
  }
  
  getAllTicket(){
    return  this.allTickets;
  }

  getTicket(ticketNumber:string){
    var ticket:Ticket={} as Ticket
    for(let i=0;i<this.allTickets.length;i++){
      if(this.allTickets[i].ticketNumber==ticketNumber){
        ticket=this.allTickets[i]
      }
    }
    return ticket;
  }
}
