import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PublicWebsiteModule } from './public-website/public-website.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, BrowserAnimationsModule, RouterModule, PublicWebsiteModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
