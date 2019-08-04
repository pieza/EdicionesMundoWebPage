import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { environment } from 'environments/environment.prod';
import { BookService } from './services/book.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MailService } from './services/mail.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        CatalogueComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase, 'prs-emundo'),
        AngularFirestoreModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        BookService,
        MailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
