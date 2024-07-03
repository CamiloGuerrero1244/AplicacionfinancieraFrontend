import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {

  category:any[]=[];
  newCategory = {
    name: '',
    type: '',
    
  }; 
  
  constructor(private categoryService:CategoryService){}

  // ngOnInit(): void {
  //   this.getCategory();
  // }

  // getCategory(): void {
  //   this.categoryService.getCategory().subscribe(
  //     (data) => {
  //       this.category = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching Categorys', error);
  //     }
  //   );
  // }

  // createCategory(): void {
  //   this.categoryService.createCategory(this.newCategory).subscribe(
  //     (response) => {
  //       this.category.push(response);
  //       this.newCategory = {
  //         name: '',
  //         type: '',
  //       };
  //     },
  //     (error) => {
  //       console.error('Error creating Category', error);
  //     }
  //   );
  // }

  deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.category = this.category.filter(category => category._id !== id);
      },
      (error) => {
        console.error('Error deleting Category', error);
      }
    );
  }

}












