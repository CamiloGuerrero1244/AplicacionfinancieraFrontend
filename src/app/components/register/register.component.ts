import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {user = {
    identification: 0,
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    rol:'user',
    
};

constructor(private registerService:RegisterService, private router: Router) { }

register(): void {
  this.registerService.register(this.user).subscribe(
    response => {
      console.log('User registered successfully');
      this.router.navigate(['/login']);
    },
    error => {
      console.error('Error registering user', error);
    }
  );
}

}
