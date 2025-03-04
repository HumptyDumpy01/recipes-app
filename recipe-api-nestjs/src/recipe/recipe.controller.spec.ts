import { Test, TestingModule } from '@nestjs/testing';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { of } from 'rxjs';

describe('RecipeController', () => {
  let controller: RecipeController;
  let service: RecipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [
        {
          provide: RecipeService,
          useValue: {
            getRecipes: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<RecipeController>(RecipeController);
    service = module.get<RecipeService>(RecipeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all recipes', async () => {
    const result = 'test';
    jest.spyOn(service, 'getRecipes').mockReturnValue(of(result));

    expect(await controller.getRecipes(null, null)).toBe(result);
  });

  it('should get recipes by name', async () => {
    const result = 'test';
    jest.spyOn(service, 'getRecipes').mockReturnValue(of(result));

    expect(await controller.getRecipes('name', 'pasta')).toBe(result);
  });

  it('should get recipes by ingredient', async () => {
    const result = 'test';
    jest.spyOn(service, 'getRecipes').mockReturnValue(of(result));

    expect(await controller.getRecipes('ingredient', 'tomato')).toBe(result);
  });

  it('should get recipes by country', async () => {
    const result = 'test';
    jest.spyOn(service, 'getRecipes').mockReturnValue(of(result));

    expect(await controller.getRecipes('country', 'Italy')).toBe(result);
  });

  it('should get recipes by category', async () => {
    const result = 'test';
    jest.spyOn(service, 'getRecipes').mockReturnValue(of(result));

    expect(await controller.getRecipes('category', 'Dessert')).toBe(result);
  });
});
