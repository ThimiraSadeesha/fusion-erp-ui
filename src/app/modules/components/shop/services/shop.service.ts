import {Injectable} from "@angular/core";
import {APIRequestResources, CachedAPIRequest, PaginationResponse} from "../../../../core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, tap} from "rxjs";

import {toSignal} from "@angular/core/rxjs-interop";
import {take} from "rxjs/operators";
import {FindOrderDTO, GetOrderDTO} from "../../orders/interface/order.entity";
import {FindShopDTO} from "../interfaces/shop.entity";



@Injectable({
    providedIn: 'root'
})
export class ShopService extends CachedAPIRequest {

    $all = new BehaviorSubject<FindShopDTO[]>([]);
    all = toSignal(this.$all, {initialValue: []});

    $active = new BehaviorSubject<GetOrderDTO | undefined>(undefined);
    active = toSignal(this.$active, {initialValue: undefined});

    constructor(protected override http: HttpClient, private router: Router) {
        super(http, APIRequestResources.ShopService)
        this.find({
            shop_code: '',
            short_name: '',
            full_name: '',
            route_name: '',
            page_number: 1,
            items_per_page: 10
        }).pipe(take(1)).subscribe()
    }

    find = (searchParams: any, refresh = false) => {
        return this.get<PaginationResponse<FindShopDTO[]>>({
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
