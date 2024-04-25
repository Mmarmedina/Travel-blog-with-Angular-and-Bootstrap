import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { FilterComponent } from './components/filter/filter.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThumbnailPostComponent } from './components/thumbnail-post/thumbnail-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PostsCategoryComponent } from './components/posts-category/posts-category.component';
import { FormsModule } from '@angular/forms';
import { StickyButtonComponent } from './components/sticky-button/sticky-button.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormComponent,
    ViewPostComponent,
    FilterComponent,
    NavComponent,
    FooterComponent,
    ThumbnailPostComponent,
    HeaderComponent,
    PostsCategoryComponent,
    StickyButtonComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
