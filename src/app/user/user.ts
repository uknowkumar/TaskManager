import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
  imports: [CommonModule, HttpClientModule]
})
export class User {
  emailTouched = false;
  constructor(private userService: UserService) {}

  onRegister(firstName: string, lastName: string, email: string) {
    const payload = { firstName, lastName, email };
    console.log('Register clicked:', payload);

    this.userService.register(payload).subscribe({
      next: (res) => {
        console.log('Server response:', res);
        alert('User registered successfully');
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert('Registration failed. See console for details.');
      }
    });
  }

}
