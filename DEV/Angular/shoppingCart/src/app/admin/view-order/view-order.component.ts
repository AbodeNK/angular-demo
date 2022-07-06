import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  totalPrice: number;
  totalItems: number;
  constructor(
    public dialogRef: MatDialogRef<ViewOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

  ngOnInit(): void {
    let total = 0;
    this.data.items.forEach((item) => {
      total += item.totalPrice;
    });
    this.totalPrice = total;

    let totalItems = 0;
    this.data.items.forEach((item) => {
      totalItems += item.quantity;
    });
    this.totalItems = totalItems;
  }
  

  onNoCick():void{
    this.dialogRef.close();
  }
}
