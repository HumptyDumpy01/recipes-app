import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeService {
  private readonly BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private readonly httpService: HttpService) {}

  getRecipes(filterType?: string, filterValue: string = ``): Observable<any> {
    let url = `${this.BASE_URL}/search.php?s=`; // Default: fetch all recipes

    switch (filterType) {
      case 'name':
        url = `${this.BASE_URL}/search.php?s=${filterValue}`;
        break;
      case 'ingredient':
        url = `${this.BASE_URL}/filter.php?i=${filterValue}`;
        break;
      case 'country':
        url = `${this.BASE_URL}/filter.php?a=${filterValue}`;
        break;
      case 'category':
        url = `${this.BASE_URL}/filter.php?c=${filterValue}`;
        break;
      default:
        break;
    }

    return this.httpService.get(url).pipe(map((response) => response.data));
  }

  getRecipeDetails(id: string): Observable<any> {
    const url = `${this.BASE_URL}/lookup.php?i=${id}`;
    return this.httpService.get(url).pipe(map((response) => response.data));
  }
}
