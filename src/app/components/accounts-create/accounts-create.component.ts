import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-accounts-create',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './accounts-create.component.html',
  styleUrl: './accounts-create.component.css'
})
export class AccountsCreateComponent {

  accounts:any[]=[];
  newAccount = {
    name: '',
    balance: 0,
    type: '',
    userId:'',
  }; 

  constructor(private accountsService:AccountsService,private authService:AuthService){}

  createAccounts(): void {
    this.newAccount.userId=this.authService.getUserId();
    this.accountsService.createAccounts(this.newAccount).subscribe(
      (response) => {
        this.accounts.push(response);
        this.newAccount = {
          name: '',
          balance: 0,
          type: '',
          userId:'',
        };
      },
      (error) => {
        console.error('Error creating Accounts', error);
      }
    );
  }

}
