import {Component, effect, inject} from '@angular/core';
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NotificationService, PaginationComponent} from "../../../../core";
import {OrderService} from "../../orders/service/order.service";
import {ShopResultDTO} from "../interfaces/shop.entity";
import {ShopService} from "../services/shop.service";
import {DotLoadingServices} from "../../../../core/services/dot-loading.Services";

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    PaginationComponent
  ],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.scss'
})
export class ShopsComponent {
  shopData:ShopResultDTO[]=[]
  shopService=inject(ShopService);
  notification = inject(NotificationService);
  loading = inject(DotLoadingServices);

  constructor() {

    effect(() => {
      this.shopData=this.shopService.all()
    });
  }

  searchParams = {
    shop_code: '',
    short_name: '',
    full_name: '',
    route_name: '',
    page_number: 1,
    items_per_page: 10
  }
  pageNumber = 1;
  totalItems: number = 0;
  itemsPerPage: number = 0;


  fetchOrders() {
    this.loading.setLoading(true);
    this.shopService.find(this.searchParams, true).subscribe({
      next: (response) => {
        this.shopData = response?.data?.data ?? [];
        this.totalItems = response.data.totalItems;
        this.pageNumber = response.data.page;
        this.itemsPerPage = response.data.itemsPerPage;
        this.loading.setLoading(false);
      },
      error: (error) => {
        this.loading.setLoading(false);
        console.error(error);
        this.notification.showNotification({
          type: 'error',
          message: 'Failed to fetch visitors',
          timeout: 4000
        });
      }
    });
  }
  onPageChange(pageNumber: number) {
    this.searchParams = {
      ...this.searchParams,
      page_number: Number(pageNumber)
    };
    this.fetchOrders();
  }

  handleClick(id: number) {
    this.shopService.getById(String(id), true).subscribe();
  }

  clearSearch() {
    // this.searchParams. = ''
    // this.fetchOrders()
  }





}
