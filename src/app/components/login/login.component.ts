import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials={identification:'',password:''};

  constructor(private authService:AuthService, private router:Router) {}

  login():void{
    this.authService.login(this.credentials).subscribe(
      response => {
        this.authService.setToken(response.data.token);
        this.authService.setUserId(response.data.user._id);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Login error', error);
      }
    );
  }


}
