import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit{

  transaction:any[]=[];
  newTransaction = {
    date: '',
    type: '',
    amount: 0,
    description: '',
    categoryId: '',
    userId:'',

  }; 

  constructor(private transactionService:TransactionService){}
  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.transaction = data.docs;
        
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }



}
