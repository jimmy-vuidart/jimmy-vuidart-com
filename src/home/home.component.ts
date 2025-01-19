import { Component, inject } from '@angular/core'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  translateService = inject(TranslateService);

  changeLanguage() {
    this.translateService.use('en')
  }
}
