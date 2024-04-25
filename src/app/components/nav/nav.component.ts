import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category.interface';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  arrCategories: Category [];

  constructor (private categoriesService: CategoriesService) {    
    this.arrCategories = [];
  }

  ngOnInit(): void {
    this.arrCategories = this.categoriesService.getAll();
  }

  removeEnyeUrl (cat: string): string {    
    return cat.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
  }

}


