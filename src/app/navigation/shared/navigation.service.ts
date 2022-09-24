import { Injectable } from '@angular/core';

import { Menuitem } from './models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _menuItes:Menuitem[]

  constructor() { }

  set menuItems (role:string) {

  }

}
