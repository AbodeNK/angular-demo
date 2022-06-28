import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CategoriesService } from 'src/app/service/categories.service';
import { SharingDataService } from 'src/app/service/sharing-data.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {
  deviceXS:boolean;
  deviceSM:boolean;
  deviceMD:boolean;
  deviceLG:boolean;
  deviceXL:boolean;
  item$;
  constructor(private sharingData:SharingDataService ,
    private firestore: AngularFirestore,
    private products:CategoriesService,
    ) { }

  ngOnInit(): void {
    this.sharingData.currentdeviceXS.subscribe(XS=> this.deviceXS=XS);
    this.sharingData.currentdeviceSM.subscribe(SM=> this.deviceSM=SM);
    this.sharingData.currentdeviceMD.subscribe(MD=> this.deviceMD=MD);
    this.sharingData.currentdeviceLG.subscribe(LG=> this.deviceLG=LG);
    this.sharingData.currentdeviceXL.subscribe(XL=> this.deviceXL=XL);
    this.products.getProducts().subscribe(data=> this.item$=data);
  }


 


}
