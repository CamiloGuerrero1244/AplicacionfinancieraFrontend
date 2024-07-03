import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-assets-list',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './assets-list.component.html',
  styleUrl: './assets-list.component.css'
})
export class AssetsListComponent implements OnInit{
  
  
  assets:any[]=[];
  newAsset = {
    name: '',
    value: 0,
    description: '',
    userId:'',
  }; 

  constructor(private assetsService:AssetsService){}

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(): void {
    this.assetsService.getAssets().subscribe(
      (data) => {
        this.assets = data.docs;
      },
      (error) => {
        console.error('Error fetching assetss', error);
      }
    );
  }

}
