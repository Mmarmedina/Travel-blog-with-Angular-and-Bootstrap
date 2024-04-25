import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component'; 
import { ViewPostComponent } from './components/view-post/view-post.component';
import { FormComponent } from './components/form/form.component';
import { PostsCategoryComponent } from './components/posts-category/posts-category.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: "home", component: BlogComponent},
  {path: 'posts/:idpost', component: ViewPostComponent},
  {path: 'categorias/:categoryTitle', component: PostsCategoryComponent},
  {path: 'new', component: FormComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
