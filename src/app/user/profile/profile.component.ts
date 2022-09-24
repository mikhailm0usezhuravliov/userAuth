import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { iUser } from '../shared/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  private _sub:Subscription[] = [];
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this._sub.push(this._authService.currentUser$.subscribe((user) => {
      this.initForm(user);
    }));
  }

  ngOnDestroy () {
    this._sub.forEach(sub => sub.unsubscribe())
  }

  initForm(user: Partial<iUser>) {
    this.form = this._fb.group({
      firstName: [
        user.firstName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      secondName: [
        user.secondName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      email: [
        user.email,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      birthDay: [user.birthDay, [Validators.required]],
      address: [user.address],
      country: [user.country],
      gender: [user.gender],
    });
  }
  saveProfile(form: any) {
   this._sub.push(this._userService.updateUser(form.value).subscribe(result => {
      console.log(result);
    }))
  }
}
