import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductAddComponent } from './product/components/product-add.component';
import { ProductDeleteComponent } from './product/components/product-delete.component';
import { ProductEditComponent } from './product/components/product-edit.component';
import { ProductListComponent } from './product/components/product-list.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'game', component: GameComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'add', component: ProductAddComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: '', component: ProductListComponent},
  {path: 'delete/:id', component: ProductDeleteComponent},

  // {
  //   path: 'product',
  //   loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  // },
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
