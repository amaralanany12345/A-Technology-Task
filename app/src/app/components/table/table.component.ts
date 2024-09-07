import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tickets:Ticket[]=[]
  constructor (private httpClient: HttpClient,private fileSaverService: FileSaverService,private ticketService:TicketService) {
    this.tickets=ticketService.getAllTicket();
  }

  currentPage = 1;
  totalPages = 5; // Adjust this based on the total number of pages
  pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
  hoveredPage: number | null = null;
  tooltipX: number = 0;
  tooltipY: number = 0;
  
  showTooltip(index: number, page: number, event: MouseEvent) {
    this.hoveredPage = page;
    this.tooltipX = event.clientX + 10; // Adjust the positioning
    this.tooltipY = event.clientY + 10;
  }
  
  hideTooltip() {
    this.hoveredPage = null;
  }
  
  text = `{ "text": "This is text file!中文" }`;
  fileName?: string;
  options: any = {
    autoBom: false,
  };

    onDown(type: string, fromRemote: boolean) {
      const fileName = `save.${type}`;
      if (fromRemote) {
        this.httpClient
          .get(`assets/files/تذكرة رقم 45.${type}`, {
            observe: 'response',
            responseType: 'blob',
          })
          .subscribe((res) => {
            this.fileSaverService.save(res.body, fileName);
          });
        return;
      }
      const fileType = this.fileSaverService.genType(fileName);
      const txtBlob = new Blob([this.text], { type: fileType });
      this.fileSaverService.save(txtBlob, fileName, undefined, this.options);
  }

  
  ticketNumber:string=''
  searchedTicket:Ticket={} as Ticket
  isTicketFound:boolean=true

  searchForTicket(event:any,tiecketNum:string){
    if (tiecketNum != null) {
      this.searchedTicket=this.ticketService.getTicket(tiecketNum)
    }
  }
}
