import { Component } from '@angular/core';
import { GetMenuInput, MenuItemDto } from './proxy/menu';
import { MenuService } from './proxy/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selected = 'option2';
  menuResponse: any;
  menuInput : GetMenuInput = {
    isActive : true
  };

  constructor(public menuService :MenuService) {
    this.fillMenuItems();
  }

  fillMenuItems(){
    
    this.menuService.getList(this.menuInput).subscribe(x=> { this.menuResponse = x.items; });
  }

  changeFilter(){
    this.fillMenuItems();
  }
  ngOnInit(): void {

  }

}
