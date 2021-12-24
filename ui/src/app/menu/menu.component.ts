import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent {
    @Input('data') data =[];

    result: any = [];

    constructor() {

    }

    ngOnInit() { 
        for (let key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                this.result.push(this.data[key])
            }
        }
    }
}
