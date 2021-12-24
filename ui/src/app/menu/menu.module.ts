import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [MenuComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
        SharedModule
    ],
    exports:[MenuComponent]
})
export class MenuModule { }
