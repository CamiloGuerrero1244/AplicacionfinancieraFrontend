import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  category:any[]=[];
  newCategory = {
    name: '',
    type: '',
    
  }; 

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this.categoryService.getCategory().subscribe(
      (data) => {
        this.category = data.docs;
      },
      (error) => {
        console.error('Error fetching Categorys', error);
      }
    );
  }

}
