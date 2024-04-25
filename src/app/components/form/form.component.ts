import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post.interface';
import { Category } from '../../interfaces/category.interface';
import { PostsService } from '../../services/posts.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  form! : FormGroup;  
  arrCategories: Category [];
  upDateArray!: Post[];   

  constructor (
    private postService: PostsService, 
    private categoriesService: CategoriesService) {
    this.arrCategories =  [];  
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(25), Validators.maxLength(130)]),
      text: new FormControl('', [Validators.required, Validators.minLength(300)]),
      excerpt: new FormControl ('', [Validators.required, Validators.minLength(30)]),
      author: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      img: new FormControl('', [Validators.required, Validators.pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/i)]),
      date: new FormControl ('', Validators.required),
      id_category: new FormControl ('', Validators.required)      
    },[])

    this.arrCategories = this.categoriesService.getAll();    
  }

  checkError (control: string, error: string) {
    if (this.form.get(control)?.hasError(error) && this.form.get(control)?.touched) {
      return true
    }else {
      return false
    }
  }  
  
  onSubmit (): void {
    const id_category = parseInt(this.form.get('id_category')?.value)
    this.form.get('id_category')?.setValue(id_category);    
    
    this.upDateArray = this.postService.newP(this.form.value); 
    // MMM - Dejo este console.log para ver en consola el array con el nuevo post añadido.
    console.log (this.upDateArray);  

    alert('Se ha añadido el post correctamente');
  }  
}