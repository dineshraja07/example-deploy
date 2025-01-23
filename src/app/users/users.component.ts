import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-users',
  imports: [RouterOutlet,RouterLink],
  standalone:true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
     
}
