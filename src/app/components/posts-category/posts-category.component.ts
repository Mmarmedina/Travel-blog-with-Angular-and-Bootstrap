import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { PostsService } from '../../services/posts.service';
import { Category } from '../../interfaces/category.interface';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-category',
  templateUrl: './posts-category.component.html',
  styleUrl: './posts-category.component.css'
})

export class PostsCategoryComponent {
  
  category: Category | undefined;
  postsCategory: Post [];
  
  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private postsService: PostsService) {
      this.category = {         
        id: 0,
        title: ""      
      }
      this.postsCategory = [];     
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      const categoryTitle = params.categoryTitle;
      this.category = this.categoriesService.get(categoryTitle);
      if (this.category === undefined) {
        this.router.navigate (['/home']);      
      }else {
        this.postsCategory = this.postsService.getPostByIdCategory(this.category.id);
      }
    }) 
  } 
}









  






