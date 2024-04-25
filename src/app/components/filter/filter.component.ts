import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent {

  arrCategories: Category [];

  @Output() filter: EventEmitter<number>;

  constructor (private categoriesService: CategoriesService) {
    this.arrCategories = [];
    this.filter = new EventEmitter();
  }
  
  ngOnInit(): void {
    this.arrCategories = this.categoriesService.getAll();
  }

  saveIdCategorySelected($event: any) {
    const IdCategoryTypeNumber = parseInt($event.target.value);
    this.filter.emit(IdCategoryTypeNumber); 
  }

}
