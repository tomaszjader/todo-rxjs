import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(key: string): Observable<string> {
    return this.languageService.getTranslation(key);
  }
}