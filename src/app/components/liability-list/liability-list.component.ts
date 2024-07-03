import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LiabilityService } from '../../services/liability.service';

@Component({
  selector: 'app-liability-list',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './liability-list.component.html',
  styleUrl: './liability-list.component.css'
})
export class LiabilityListComponent implements OnInit {

  liability:any[]=[];
  newLiability = {
    name: '',
    amount: 0,
    description: '',
    userId:'',
  }; 

  constructor(private liabilityService:LiabilityService){}

  ngOnInit(): void {
    this.getLiability();
  }

  getLiability(): void {
    this.liabilityService.getLiability().subscribe(
      (data) => {
        this.liability = data.docs;
      },
      (error) => {
        console.error('Error fetching liabilitys', error);
      }
    );
  }


}
