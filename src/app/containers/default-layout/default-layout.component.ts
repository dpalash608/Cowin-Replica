import {Component} from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: "[app-dashboard,app-dashboard-admin]",
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  Logout()
  {
    sessionStorage.clear();
    window.open("http://localhost:4200/#/login","_self");
  }

}
