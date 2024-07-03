import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-accounts-list',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './accounts-list.component.html',
  styleUrl: './accounts-list.component.css'
})
export class AccountsListComponent implements OnInit{

  accounts:any[]=[];
  newAccount = {
    name: '',
    balance: 0,
    type: '',
    userId:'',
  }; 

  constructor(private accountsService:AccountsService){}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountsService.getAccounts().subscribe(
      (data) => {
        this.accounts = data.docs;
      },
      (error) => {
        console.error('Error fetching Accounts', error);
      }
    );
  }

}
