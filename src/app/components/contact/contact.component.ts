import { Component, OnInit } from '@angular/core';
import { MailService } from 'app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private email: string;
  private name: string;
  private phone: string;
  private message: string;

  constructor(private emailService: MailService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.emailService.sendContactEmail(this.email, 'hola');
  }
}
