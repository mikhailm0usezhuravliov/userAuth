import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { iUser } from '../user/shared/user.model';

import { Menuitem, userMenu } from './shared/models';
import { NavigationService } from './shared/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  public menuItems: Menuitem[] = userMenu;
  public isAuth$: Observable<boolean>;
  public User:any;

  constructor(
    private _navService: NavigationService,
    private _router: Router,
    private _authService: AuthService
  ) {
    this.isAuth$ = this._authService.isAuth$;
  }

  ngOnInit(): void {
    this._authService.currentUser$.subscribe(user => {
      this.User = user;
    })
  }

  logOut () {
    this._authService.logOut();
    this._router.navigate(['/auth']);
  }

}
