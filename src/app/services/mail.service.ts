import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.prod';

@Injectable()
export class MailService {

  private URL = environment.FUNCTIONS_URL

  constructor(private http: HttpClient) { }

  sendContactEmail(from, content) {
    return this.http.post(`${this.URL}/sendContactEmail`, { to: environment.TO_CONTACT_EMAIL, from, content });
  }
}
