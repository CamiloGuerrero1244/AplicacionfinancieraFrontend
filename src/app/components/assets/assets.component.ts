import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.css'
})
export class AssetsComponent {

  assets:any[]=[];
  newAsset = {
    name: '',
    value: 0,
    description: '',
    userId:'',
  }; 

  constructor(private assetsService:AssetsService){}

  // ngOnInit(): void {
  //   this.getAssets();
  // }

  // getAssets(): void {
  //   this.assetsService.getAssets().subscribe(
  //     (data) => {
  //       this.assets = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching assetss', error);
  //     }
  //   );
  // }

  // createAssets(): void {
  //   this.assetsService.createAssets(this.newAsset).subscribe(
  //     (response) => {
  //       this.assets.push(response);
  //       this.newAsset = {
  //         name: '',
  //         value: 0,
  //         description: '',
  //         userId:'',
  //       };
  //     },
  //     (error) => {
  //       console.error('Error creating assets', error);
  //     }
  //   );
  // }

  deleteAssets(id: string): void {
    this.assetsService.deleteAssets(id).subscribe(
      () => {
        this.assets = this.assets.filter(assets => assets._id !== id);
      },
      (error) => {
        console.error('Error deleting assets', error);
      }
    );
  }

}
