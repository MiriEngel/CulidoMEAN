import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppRoutes }       from './app.routes';


import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { ArticlesModule } from './articles/articles.module';
import {ChatModule} from './chat/chat.module'
import {HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    
    BrowserModule,
     HttpModule,
    AuthenticationModule,
    HomeModule,
    ArticlesModule,
    ChatModule,
    RouterModule.forRoot(AppRoutes),
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
