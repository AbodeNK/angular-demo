import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ShopingCartService } from './shoping-cart.service';
import * as firebase from 'firebase/app';
import * as firestore from 'firebase/firestore';
import { map, switchMap, first } from 'rxjs/operators';
import { Order } from '../data/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFirestore,
    private shoppingCartService: ShopingCartService
  ) {}

  async placeOrder(order): Promise<DocumentReference> {
    let result = await this.db.collection('orders').add(order);
    this.shoppingCartService.clearCart();

    return result;
  }

  getAllOrders() {
    return this.db.collection<Order>('orders').valueChanges({ idField: 'id' });
  }

  getOrdersByUser(userId: string) {
    return this.db.collection('orders', (ref) =>
      ref.where('userId', '==', userId)
    );
  }

  getOrderById(route: ActivatedRoute) {
    return this.getOrderId(route).pipe(
      switchMap((orderId) => {
        return this.db
          .collection<Order>('orders', (ref) =>
            this.queryOrderById(orderId, ref)
          )
          .valueChanges({ idField: 'id' });
      }),
      map((o: Order[]) => {
        return o[0];
      })
    );
  }

  async getOrderUserId(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');

    let userId = (
      await this.db
        .collection<Order>('orders', (ref) => this.queryOrderById(id, ref))
        .valueChanges()
        .pipe(first())
        .toPromise()
    )[0].userId;

    return userId;
  }

  private getOrderId(route: ActivatedRoute) {
    return route.paramMap.pipe(
      map((p) => {
        return p.get('id');
      })
    );
  }

  private queryOrderById(id: string, ref: CollectionReference) {
    return ref.where(firestore.documentId(), '==', id);
  }
}
