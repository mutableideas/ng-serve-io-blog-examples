import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Claims, RolesEnum } from '@org/platform-provider-pattern/domain';
import { jwtClaimsService } from '@org/platform-provider-pattern/ui/data-access';
import { ClaimsDirective } from '../claims.directive';

@Component({
  selector: 'org-role',
  standalone: true,
  imports: [
    CommonModule, 
    ClaimsDirective
  ],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent {
  protected router = inject(Router);
  protected claimsService = jwtClaimsService();
  protected claims = this.claimsService.getClaims<Claims>();
  protected roles = RolesEnum;
}
