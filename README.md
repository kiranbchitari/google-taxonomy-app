# Google Taxonomy Category Details App Documentation

## Introduction

The Google Taxonomy Category Details app is a React-based web application that allows users to enter a category ID and fetches the corresponding category details from the Google Taxonomy dataset. The app also uses the Google Custom Search API to display an image related to the category.
## Live Demo

Try out the live demo of the Google Taxonomy Category Details app: [https://googletaxonomy.vercel.app/](https://googletaxonomy.vercel.app/)

## Features

- Input a Category ID: Users can enter a category ID to retrieve the category details.
- Fetch Category Details: The app fetches the category details from the Google Taxonomy dataset based on the provided Category ID.
- Display Category Details: The retrieved category details, including Category ID, Category Name, and Complete Path, are displayed to the user.
- Display Category Image: The app uses the Google Custom Search API to fetch an image related to the category and displays it alongside the category details.

## Project Structure

The project consists of the following components:

1. `GoogleTaxonomy.js`: The main component that includes the input form and handles fetching the category details.
2. `CategoryDetails.js`: A component responsible for displaying the retrieved category details and the associated image.
3. `App.js`: The main entry point for rendering the GoogleTaxonomy component.

## Usage

To run the Google Taxonomy Category Details app locally, follow these steps:

1. Clone the repository:

```git clone https://github.com/your-username/google-taxonomy-category-details.git```

2. Install the dependencies:

```
cd google-taxonomy-category-details
npm install
```

3. Obtain the necessary API key:

- Get a Google API key from the Google Developer Console: https://developers.google.com/custom-search/docs/tutorial/creatingcse
- Enable the Google Custom Search JSON API and obtain the Custom Search Engine ID.

4. Update the API key and Custom Search Engine ID:

Open `GoogleTaxonomy.js` and replace `'YOUR_GOOGLE_API_KEY'` and `'YOUR_CUSTOM_SEARCH_ENGINE_ID'` with your actual API key and Custom Search Engine ID.

5. Run the app:

```npm start```

6. Access the app in your browser:

Open your browser and navigate to `http://localhost:3000`.

## Limitations and Considerations

- Google Custom Search API: The app uses the Google Custom Search API to fetch category-related images. Ensure you comply with Google's terms of service and usage limits when using this API.
- Internet Connection: The app requires an active internet connection to fetch category details and images from the Google Custom Search API.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](/LICENSE) file.

## Support

For any issues, questions, or feedback, please open an issue on the project's GitHub repository: [https://github.com/kiranbchitari/google-taxonomy-app)

## Author

This Google Taxonomy Category Details app was created by [Kiran B Chitari](https://github.com/kiranbchitari).
