import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';
import {MatTableDataSource,} from '@angular/material/table';
import { productData } from 'src/app/data/newProductsData';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NewProductsComponent } from '../new-products/new-products.component';
import {MatSort} from '@angular/material/sort';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-products-manage',
  templateUrl: './products-manage.component.html',
  styleUrls: ['./products-manage.component.scss']
})
export class ProductsManageComponent implements AfterViewInit, OnInit{
    
  
  displayedColumns: string[] = ['categories', 'ProductsName', 'Price','edit'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   dataSource;

  constructor(private productService:CategoriesService,
    public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
 
  }


  ngAfterViewInit() {
    this.productService.getProducts().subscribe(data=>{
      this.dataSource =new MatTableDataSource<productData>(data);
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
    const dialogRef = this.dialog.open(EditProductComponent,{
      width:'80%',
      data:data,
    });

  }

 

}

