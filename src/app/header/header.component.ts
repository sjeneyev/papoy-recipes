import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.authService.logout();
  }

  onAddCategory(): void {
    console.log('From onAddCategory()');
  }

  onAddRecipe(): void {
    console.log('From onAddRecipe()');
  }
}
