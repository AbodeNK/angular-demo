import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/data/order';
import { OrderService } from 'src/app/service/order.service';
import { ViewOrderComponent } from '../view-order/view-order.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['datePlaced', 'Customer','address','phone','view'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   dataSource;
   order$: Observable<Order>;
   totalPrice: number;
  constructor(
    private orderService: OrderService,
    public dialog: MatDialog

    ) { }

  ngOnInit(): void {
    // this.order$ = this.orderService.getOrderById(this.route);
    // let total = 0;
    // this.order.items.forEach((item) => {
    //   total += item.totalPrice;
    // });
    // this.totalPrice = total;
  }
  
  ngAfterViewInit() {
    this.orderService.getAllOrders().subscribe(data=>{
      this.dataSource =new MatTableDataSource<Order>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } );
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(data){
    let dialogBoxSettings = {
      height: '300px',
      width: '500px',
      margin: '0 auto',
      disableClose: true,
      hasBackdrop: true,
    };
    const dialogRef = this.dialog.open(ViewOrderComponent,{
      // autoFocus: true,
      maxHeight: '95vh',
      width:'95%',
      data:data,
    });

  }
  

}
