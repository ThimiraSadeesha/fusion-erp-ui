import {Component, effect, inject} from '@angular/core';
import {DatePipe, NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {OrderService} from "../service/order.service";
import {OrderData} from "../interface/order.entity";
import {LoadingService, NotificationService, PaginationComponent} from "../../../../core";
import {DotLoadingServices} from "../../../../core/services/dot-loading.Services";

@Component({
    selector: 'app-order',
    standalone: true,
    imports: [
        NgClass,
        FormsModule,
        DatePipe,
        PaginationComponent
    ],
    templateUrl: './order.component.html',
    styleUrl: './order.component.scss'
})
export class OrderComponent {

    orderService = inject(OrderService);
    notification = inject(NotificationService);
    loading = inject(DotLoadingServices);
    orderData: OrderData[] = []


    searchParams = {
        order_date: '',
            order_reference: '',
            shop_name: '',
            sales_rep_name: '',
            payment_type: '',
            page_number: 1,
            items_per_page: 10
    }
    pageNumber = 1;
    totalItems: number = 0;
    itemsPerPage: number = 0;
    openModal = false;
    constructor() {
        effect(() => {
            // this.orderData = this.orderService.all()
        });
    }


    closeModal() {
        this.openModal = false;
    }

    fetchOrders() {
        this.loading.setLoading(true);
        this.orderService.find(this.searchParams, true).subscribe({
            next: (response) => {
                this.orderData = response?.data?.data ?? [];
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
        this.orderService.getById(String(id), true).subscribe();
    }

    clearSearch() {
        this.searchParams.payment_type = ''
        this.fetchOrders()
    }

}
