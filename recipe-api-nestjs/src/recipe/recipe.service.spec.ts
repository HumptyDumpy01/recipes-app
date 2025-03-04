import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { RecipeService } from './recipe.service';
import { AxiosResponse } from 'axios';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RecipeService>(RecipeService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch all recipes', (done) => {
    const result: AxiosResponse = {
      data: 'test',
      status: 200,
      statusText: 'OK',
      headers: {},
      // @ts-ignore
      config: {},
    };
    jest.spyOn(httpService, 'get').mockReturnValue(of(result));

    service.getRecipes().subscribe((data) => {
      expect(data).toEqual(result.data);
      done();
    });
  });

  it('should fetch recipes by name', (done) => {
    const result: AxiosResponse = {
      data: 'test',
      status: 200,
      statusText: 'OK',
      headers: {},
      // @ts-ignore
      config: {},
    };
    jest.spyOn(httpService, 'get').mockReturnValue(of(result));

    service.getRecipes('name', 'pasta').subscribe((data) => {
      expect(data).toEqual(result.data);
      done();
    });
  });
  it('should fetch recipes by ingredient', (done) => {
    const result: AxiosResponse = {
      data: 'test',
      status: 200,
      statusText: 'OK',
      headers: {},
      // @ts-ignore
      config: {},
    };
    jest.spyOn(httpService, 'get').mockReturnValue(of(result));

    service.getRecipes('ingredient', 'tomato').subscribe((data) => {
      expect(data).toEqual(result.data);
      done();
    });
  });

  it('should fetch recipes by country', (done) => {
    const result: AxiosResponse = {
      data: 'test',
      status: 200,
      statusText: 'OK',
      headers: {},
      // @ts-ignore
      config: {},
    };
    jest.spyOn(httpService, 'get').mockReturnValue(of(result));

    service.getRecipes('country', 'Italy').subscribe((data) => {
      expect(data).toEqual(result.data);
      done();
    });
  });

  it('should fetch recipes by category', (done) => {
    const result: AxiosResponse = {
      data: 'test',
      status: 200,
      statusText: 'OK',
      headers: {},
      // @ts-ignore
      config: {},
    };
    jest.spyOn(httpService, 'get').mockReturnValue(of(result));

    service.getRecipes('category', 'Dessert').subscribe((data) => {
      expect(data).toEqual(result.data);
      done();
    });
  });

  it('should fetch recipe details', (done) => {
    const result: AxiosResponse = {
      data: 'test',
      status: 200,
      statusText: 'OK',
      headers: {},
      // @ts-ignore
      config: {},
    };
    jest.spyOn(httpService, 'get').mockReturnValue(of(result));

    service.getRecipeDetails('52772').subscribe((data) => {
      expect(data).toEqual(result.data);
      done();
    });
  });
});
