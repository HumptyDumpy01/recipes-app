import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async getRecipes(
    @Query('type') filterType: string,
    @Query('value') filterValue: string,
  ) {
    const response = await this.recipeService
      .getRecipes(filterType, filterValue)
      .toPromise();
    return response;
  }

  @Get(`:id`)
  async getRecipeDetails(@Param(`id`) id: string) {
    const response = await this.recipeService.getRecipeDetails(id).toPromise();
    return response;
  }
}
