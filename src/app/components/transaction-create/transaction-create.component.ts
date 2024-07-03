import { TransactionComponent } from './../transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';


@Component({
  selector: 'app-transaction-create',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './transaction-create.component.html',
  styleUrl: './transaction-create.component.css'
})


export class TransactionCreateComponent {

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

  



  // onSubmit() {
  //   // Extract form values from newTransaction object
  //   const transactionData = { ...this.newTransaction };

  //   // Call TransactionService to create transaction
  //   this.transactionService.createTransaction(transactionData)
  //     .subscribe(
  //       (response) => {
  //         console.log('Transaction created successfully!', response);
  //         // Optionally: Clear the form or update the transaction list
  //         this.newTransaction = { // Reset form after successful creation
  //           date: '',
  //           type: '',
  //           amount: 0,
  //           description: '',
  //           categoryId: '',
  //           userId: ''
  //         };
  //       },
  //       (error) => {
  //         console.error('Error creating transaction:', error);
  //         // Optionally: Display an error message to the user
  //       }
  //     );
  // }

  createTransaction(): void {
    this.transactionService.createTransaction(this.newTransaction).subscribe(
      (response) => {
        this.transaction.push(response);
        this.newTransaction = {
          date: '',
          type: '',
          amount: 0,
          description: '',
          categoryId: '',
          userId:'',
        };
      },
      (error) => {
        console.error('Error creating transaction', error);
      }
    );
  }

}


