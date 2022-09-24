import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { iUser, User, Users } from '../user/shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _authService: AuthService) {}

  updateUser(user: iUser) {
    return this._authService.currentUser$.pipe(
      map((currentUser) => {
        if (!user) return false;
        currentUser.address = user.address;
        currentUser.birthDay = user.birthDay;
        currentUser.country = user.country;
        currentUser.email = user.email;
        currentUser.firstName = user.firstName;
        currentUser.gender = user.gender;
        currentUser.secondName = user.secondName;
        return true;
      })
    );
  }
}
