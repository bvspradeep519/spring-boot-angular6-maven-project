import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../model/Ingredient';
import {environment} from '../../environments/environment';
import {ApiPaths} from '../config/ApiPaths';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
@Injectable()
export class IngredientComponent implements OnInit {

  title = 'ingredient';
  ingredient: Ingredient = new Ingredient();
  isShowAddIng = true;

  constructor(private http: HttpClient, public appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.appComponent.refreshAppCache();
  }

  toggleAddIng() {
    this.isShowAddIng = !this.isShowAddIng;
  }

  addIngredients(form: NgForm) {
    let ingredientList: Ingredient[] = [];
    ingredientList.push(this.ingredient);

    if (form.valid) {
      console.log('Add ingredient list: ' + JSON.stringify(ingredientList));
    }

    this.http.post(environment.baseUrl + ApiPaths.AddIngredients, ingredientList).subscribe(
      (response) => {
        console.log('Add ingredients response -' + JSON.stringify(response));
      },
      (error) => {
        console.log('Error happened in add ingredient' + JSON.stringify(error));
      },
      () => {
        console.log('%% add ingredient is completed successfully %%');
      });

    form.reset();
    this.ngOnInit();
  }

}
