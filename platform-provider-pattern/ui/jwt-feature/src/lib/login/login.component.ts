import { Component, DestroyRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoginService } from '@org/platform-provider-pattern/ui/data-access';

@Component({
  selector: 'org-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected router = inject(Router);
  protected loginService = inject(LoginService)
  protected destroyRef = inject(DestroyRef);

  protected login(): void {
    this.loginService.login().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => 
      this.router.navigate(['./role'])
    )
  }
}
