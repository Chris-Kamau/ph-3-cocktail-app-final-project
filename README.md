# ph-3-front-end-final-project

Cocktail App
This is a web application for managing and displaying a list of cocktails. Users can view the available cocktails, add them to the cart, and manage the cocktail inventory.

Features
Display a list of cocktails with details such as name, price, ingredients, and available quantity.
Toggle display of additional details for each cocktail.
Add cocktails to the cart and reduce the available quantity.
Disable the "Add to cart" button and display "Out of stock" when the available quantity is zero.
View the cocktail inventory in a table format with options to delete cocktails.
Add new cocktails to the inventory using a form.
Technologies Used
React: A JavaScript library for building user interfaces.
React Router: A library for handling routing in a React application.
HTML and CSS: Markup and styling languages for creating the user interface.
JavaScript: The programming language used for the application logic.
Sinatra (Ruby): A lightweight web application framework for the back-end server.
Installation
Clone the repository: git clone <repository-url>
Navigate to the project directory: cd cocktail-app
Install the dependencies: npm install
Start the development server: npm start
Usage
Open your web browser and go to http://localhost:3000.
You will see a list of available cocktails. Click on a cocktail to view more details.
You can add cocktails to the cart by clicking the "Add to cart" button.
If the available quantity is zero, the button will be disabled and display "Out of stock".
To view the cocktail inventory table, go to the "/table" route.
To add a new cocktail to the inventory, go to the "/form" route and fill out the form.
API Endpoints
GET /cocktails: Get all cocktails from the server.
POST /cocktails: Add a new cocktail to the server.
DELETE /cocktails/🆔 Delete a cocktail with the specified ID.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
