import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-thumbnail-post',
  templateUrl: './thumbnail-post.component.html',
  styleUrl: './thumbnail-post.component.css'
})
export class ThumbnailPostComponent {

  @Input () post: Post;
  category: Category | undefined;

  constructor(private categoriesService: CategoriesService) {

    this.post = {
      id: 0,
      title: "",
      text: "",
      excerpt: "",
      author: "",
      img: "",
      date: "",
      id_category: 0,
    }

    this.category = {
      id: 0,
      title: "",
    }
  }

  ngOnInit(): void {
    this.category = this.categoriesService.getTitle(this.post.id_category);
  }
}
