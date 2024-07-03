import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LiabilityService } from '../../services/liability.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-liability-create',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './liability-create.component.html',
  styleUrl: './liability-create.component.css'
})
export class LiabilityCreateComponent {

  liability:any[]=[];
  newLiability = {
    name: '',
    amount: 0,
    description: '',
    userId:'',
  }; 


  constructor(private liabilityService:LiabilityService,private authService:AuthService){}

  createLiability(): void {
    this.newLiability.userId=this.authService.getUserId();
    this.liabilityService.createLiability(this.newLiability).subscribe(
      (response) => {
        this.liability.push(response);
        this.newLiability = {
          name: '',
          amount: 0,
          description: '',
          userId:'',
        };
      },
      (error) => {
        console.error('Error creating liability', error);
      }
    );
  }



}
