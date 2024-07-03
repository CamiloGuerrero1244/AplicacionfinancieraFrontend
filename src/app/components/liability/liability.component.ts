import { LiabilityService } from './../../services/liability.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liability',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './liability.component.html',
  styleUrl: './liability.component.css'
})
export class LiabilityComponent {

  liability:any[]=[];
  newLiability = {
    name: '',
    amount: 0,
    description: '',
    userId:'',
  }; 


  constructor(private liabilityService:LiabilityService){}

  // ngOnInit(): void {
  //   this.getLiability();
  // }

  // getLiability(): void {
  //   this.liabilityService.getLiability().subscribe(
  //     (data) => {
  //       this.liability = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching liabilitys', error);
  //     }
  //   );
  // }

  // createLiability(): void {
  //   this.liabilityService.createLiability(this.newLiability).subscribe(
  //     (response) => {
  //       this.liability.push(response);
  //       this.newLiability = {
  //         name: '',
  //         amount: 0,
  //         description: '',
  //         userId:'',
  //       };
  //     },
  //     (error) => {
  //       console.error('Error creating liability', error);
  //     }
  //   );
  // }

  deleteLiability(id: string): void {
    this.liabilityService.deleteLiability(id).subscribe(
      () => {
        this.liability = this.liability.filter(liability => liability._id !== id);
      },
      (error) => {
        console.error('Error deleting liability', error);
      }
    );
  }

}
