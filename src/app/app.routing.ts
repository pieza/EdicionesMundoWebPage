import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes =[
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'catalogo/:category', component: CatalogueComponent },
    { path: 'catalogo', component: CatalogueComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacto', component: ContactComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
