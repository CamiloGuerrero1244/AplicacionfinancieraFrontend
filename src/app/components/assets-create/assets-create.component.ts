import { Component } from '@angular/core';
import { AssetsService } from '../../services/assets.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-assets-create',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './assets-create.component.html',
  styleUrl: './assets-create.component.css'
})
export class AssetsCreateComponent {

  assets:any[]=[];
  newAsset = {
    name: '',
    value: 0,
    description: '',
    userId:'',
  }; 

  constructor(private assetsService:AssetsService,private authService:AuthService){}

  createAssets(): void {
    this.newAsset.userId=this.authService.getUserId();
    this.assetsService.createAssets(this.newAsset).subscribe(
      (response) => {
        this.assets.push(response);
        this.newAsset = {
          name: '',
          value: 0,
          description: '',
          userId:'',
        };
      },
      (error) => {
        console.error('Error creating assets', error);
      }
    );
  }

}
