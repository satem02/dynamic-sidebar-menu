export interface MenuItemDto {
    text?: string | undefined;
    submenu?: SubmenuDto[] | undefined;
    isActive?: boolean;
}

export interface SubmenuDto {
    text?: string | undefined;
    url?: string | undefined;
    isActive?: boolean;
}


export interface MenuItemDtoPagedResultDto {
    totalCount?: number;
    items?: MenuItemDto[] | undefined;
}

export interface GetMenuInput{
 isActive?:boolean;
} 