import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GetMenuInput, MenuItemDto, MenuItemDtoPagedResultDto } from '.';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    apiURL: string = 'https://localhost:7266/api/DynamicMenu';

    getList(input: GetMenuInput) {
        const options = input.isActive
            ? { params: new HttpParams().set('isActive', input.isActive) }
            : {};
        return this.httpClient.get<MenuItemDtoPagedResultDto>(this.apiURL, options);
    }
    constructor(private httpClient: HttpClient) { }
}
