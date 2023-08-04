import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './shared/share/share.module';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './ngrx/effects/article.effects';
import { articleReducer } from './ngrx/reducers/article.reducer';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './component/navbar/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent, HomeComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      article: articleReducer,
    }, {}),
    HttpClientModule,
    ShareModule,
    EffectsModule.forRoot([ArticleEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
