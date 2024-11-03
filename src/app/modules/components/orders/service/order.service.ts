import {Injectable} from "@angular/core";
import {APIRequestResources, CachedAPIRequest, PaginationResponse} from "../../../../core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, tap} from "rxjs";
import {FindOrderDTO, GetOrderDTO} from "../interface/order.entity";
import {toSignal} from "@angular/core/rxjs-interop";
import {take} from "rxjs/operators";



@Injectable({
    providedIn: 'root'
})
export class OrderService extends CachedAPIRequest {

    $all = new BehaviorSubject<FindOrderDTO[]>([]);
    all = toSignal(this.$all, {initialValue: []});
    //
    // $categoryAll = new BehaviorSubject<GetOrderDTO[]>([]);
    // categoryAll = toSignal(this.$categoryAll, {initialValue: []});
    //
    $active = new BehaviorSubject<GetOrderDTO | undefined>(undefined);
    active = toSignal(this.$active, {initialValue: undefined});

    constructor(protected override http: HttpClient, private router: Router) {
        super(http, APIRequestResources.OrderService)
        this.find({
            order_date: '',
            order_reference: '',
            shop_name: '',
            sales_rep_name: '',
            payment_type: '',
            page_number: 1,
            items_per_page: 10
        }).pipe(take(1)).subscribe()
    }

    find = (searchParams: any, refresh = false) => {
        return this.get<PaginationResponse<FindOrderDTO[]>>({
            endpoint: `find`,
            params: searchParams,
        }, refresh ? 'freshness' : 'performance')
            .pipe(
                tap((res) => this.$all.next(res.data.data)),
            )
    }

    getById = (id: string, refresh = false) => {
        return this.get<GetOrderDTO>({id}, refresh ? 'freshness' : 'performance')
            .pipe(
                tap((res) => this.$active.next(res.data)),
            );
    }

}
