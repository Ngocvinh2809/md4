import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from "./product/product.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GameComponent,
    PageNotFoundComponent,
    InputComponent,
    OutputComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule,RouterModule,ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
