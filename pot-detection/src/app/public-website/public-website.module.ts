import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [ HomeComponent ],

	imports: [ CommonModule, BrowserAnimationsModule, MatFormFieldModule ]
})
export class PublicWebsiteModule {}
