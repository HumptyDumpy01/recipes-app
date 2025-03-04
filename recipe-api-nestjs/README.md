# Recipe Backend API

This is a simple backend API built with NestJS that fetches recipe data from
the [TheMealDB API](https://www.themealdb.com/api.php). The Testing was also implemented by using Jest.

## Getting Started

To run this application, you need to have Node.js and npm (or yarn) installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HumptyDumpy01/recipe-api-nestjs.git
   cd nestjs-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```


3. **Create and Define the FRONTEND_URL in .env":**
   By default, http://localhost:3000 would suffice. (it would point to nextjs front-end.)
   ```bash
   FRONTEND_URL=http://localhost:3000
   ```

4. **Run the application:**

   ```bash
   npm run build
   npm run start
   # run tests
   npm  test:watch
   ```

   The server will start on port `3005`.

## API Endpoints

### Get Recipes

* **Endpoint:** `GET /recipes`
* **Description:** Retrieves a list of recipes based on optional filters.
* **Query Parameters:**
    * `type` (optional): Filter type. Possible values: `name`, `ingredient`, `country`, `category`.
    * `value` (optional): Filter value. Required if `type` is provided.
* **Examples:**
    * Get all recipes: `GET http://localhost:3005/recipes`
    * Get recipes by name: `GET http://localhost:3005/recipes?type=name&value=chicken`
    * Get recipes by ingredient: `GET http://localhost:3005/recipes?type=ingredient&value=garlic`
    * Get recipes by country: `GET http://localhost:3005/recipes?type=country&value=Canadian`
    * Get recipes by category: `GET http://localhost:3005/recipes?type=category&value=Dessert`
* **Response:**
    * Returns a JSON object containing the recipes that match the filter criteria.

### Get Recipe Details

* **Endpoint:** `GET /recipes/:id`
* **Description:** Retrieves the details of a specific recipe by its ID.
* **Path Parameter:**
    * `id`: The ID of the recipe.
* **Example:**
    * Get recipe details: `GET http://localhost:3005/recipes/52772`
* **Response:**
    * Returns a JSON object containing the details of the specified recipe.

## Technologies Used

* NestJS
* Node.js
* Axios (via `@nestjs/axios`)
* TheMealDB API
