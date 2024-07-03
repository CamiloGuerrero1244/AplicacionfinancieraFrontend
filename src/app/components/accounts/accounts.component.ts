import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  accounts:any[]=[];
  newAccount = {
    name: '',
    balance: 0,
    type: '',
    userId:'',
  }; 


  constructor(private accountsService:AccountsService){}

  // ngOnInit(): void {
  //   this.getAccounts();
  // }

  // getAccounts(): void {
  //   this.accountsService.getAccounts().subscribe(
  //     (data) => {
  //       this.accounts = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching Accounts', error);
  //     }
  //   );
  // }

  // createAccounts(): void {
  //   this.accountsService.createAccounts(this.newAccount).subscribe(
  //     (response) => {
  //       this.accounts.push(response);
  //       this.newAccount = {
  //         name: '',
  //         balance: 0,
  //         type: '',
  //         userId:'',
  //       };
  //     },
  //     (error) => {
  //       console.error('Error creating Accounts', error);
  //     }
  //   );
  // }

  deleteAccounts(id: string): void {
    this.accountsService.deleteAccounts(id).subscribe(
      () => {
        this.accounts = this.accounts.filter(accounts => accounts._id !== id);
      },
      (error) => {
        console.error('Error deleting Accounts', error);
      }
    );
  }


}
