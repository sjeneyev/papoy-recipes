import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.authService.logout();
  }

  onAddCategory(): void {
    console.log('From onAddCategory()');
  }

  onAddRecipe(): void {
    this.router.navigate(['./recipes/new']);
  }
}
