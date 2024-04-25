import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { Category } from '../../interfaces/category.interface';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent {

  myPost: Post | undefined;
  category: Category | undefined;

  constructor (
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private categoriesService: CategoriesService){
      this.myPost = {
          id: 0,
          title: "",
          text: "",
          excerpt: "",        
          author: "",
          img: "",
          date: "",
          id_category: 0
      }

      this.category = {
        id: 0,
        title: "",
      }
  }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe((params:any) => {
      const id = parseInt(params.idpost)
      this.myPost = this.postsService.getById(id);  
      const idCategory = this.myPost?.id_category;    
      this.category = this.categoriesService.getTitle(idCategory);    
    })
  }
}
