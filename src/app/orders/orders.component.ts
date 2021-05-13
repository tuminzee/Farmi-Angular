import { OrderService } from '@app/_services';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {
  orders: any;

  @ViewChild('htmlData') htmlData:ElementRef;
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getAllOrders();
  }


  getAllOrders(){
    // debugger;
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
      this.divideObjects(data);
    })
    // console.log(this.orders);

  }


  divideObjects(data){
   for(let i=0; i<data.length; i++){
     this.orders[i].orderDetails = JSON.parse(data[i].orderDetails);
     console.log(this.orders[i].orderDetails);
   }
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {

        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

        PDF.save('angular-demo.pdf');
    });
  }
}

