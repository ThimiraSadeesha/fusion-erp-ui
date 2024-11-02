import {Injectable} from "@angular/core";
import {CachedAPIRequest} from "../../core";
import {BehaviorSubject} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class VisitorService extends CachedAPIRequest {

    // $all = new BehaviorSubject<VisitorSearchResultDTO[]>([]);
    // all = toSignal(this.$all, {initialValue: []});
    //
    // $categoryAll = new BehaviorSubject<CategoryDTO[]>([]);
    // categoryAll = toSignal(this.$categoryAll, {initialValue: []});
    //
    // $active = new BehaviorSubject<VisitorDTO | undefined>(undefined);
    // active = toSignal(this.$active, {initialValue: undefined});
    //
    // constructor(protected override http: HttpClient, private router: Router) {
    //     super(http, APIRequestResources.VisitorService)
    //     // this.getCategories().pipe(take(1)).subscribe()
    // }
    //
    // find = (searchParams: any, refresh = false) => {
    //     return this.get<PaginationResponse<VisitorSearchResultDTO[]>>({
    //         endpoint: `find`,
    //         params: searchParams,
    //     }, refresh ? 'freshness' : 'performance')
    //         .pipe(
    //             tap((res) => this.$all.next(res.data.data)),
    //         )
    // }
}
