import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})

export class CategoryCreateComponent {

  category:any[]=[];
  newCategory = {
    name: '',
    type: '',
    
  }; 

  constructor(private categoryService:CategoryService){}

  createCategory(): void {
    this.categoryService.createCategory(this.newCategory).subscribe(
      (response) => {
        this.category.push(response);
        this.newCategory = {
          name: '',
          type: '',
        };
      },
      (error) => {
        console.error('Error creating Category', error);
      }
    );
  }

}
