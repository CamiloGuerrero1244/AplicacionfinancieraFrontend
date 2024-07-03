import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  transaction:any[]=[];
  newTransaction = {
    date: '',
    type: '',
    amount: 0,
    description: '',
    categoryId: '',
    userId:'',

  }; 

  constructor(private transactionService: TransactionService) {}

  // ngOnInit(): void {
  //   this.getTransactions();
  // }

  // getTransactions(): void {
  //   this.transactionService.getTransactions().subscribe(
  //     (data) => {
  //       this.transaction = data.docs;
        
  //     },
  //     (error) => {
  //       console.error('Error fetching transactions', error);
  //     }
  //   );
  // }

  // createTransaction(): void {
  //   this.transactionService.createTransaction(this.newTransaction).subscribe(
  //     (response) => {
  //       this.transaction.push(response);
  //       this.newTransaction = {
  //         date: '',
  //         type: '',
  //         amount: 0,
  //         description: '',
  //         categoryId: '',
  //         userId:'',
  //       };
  //     },
  //     (error) => {
  //       console.error('Error creating transaction', error);
  //     }
  //   );
  // }

  deleteTransaction(id: string): void {
    this.transactionService.deleteTransaction(id).subscribe(
      () => {
        this.transaction = this.transaction.filter(transaction => transaction._id !== id);
      },
      (error) => {
        console.error('Error deleting transaction', error);
      }
    );
  }

}
