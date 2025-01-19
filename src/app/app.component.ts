import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'
import fr from '../../public/i18n/fr.json'
import en from '../../public/i18n/en.json'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-cv';

  translationService = inject(TranslateService);

  constructor() {
    this.translationService.setTranslation('fr', fr)
    this.translationService.setTranslation('en', en)
    this.translationService.setDefaultLang('fr')
  }
}
