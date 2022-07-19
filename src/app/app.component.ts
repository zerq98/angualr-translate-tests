import { Component, VERSION } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  trNames = ['szerokość boku'];
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }
}
