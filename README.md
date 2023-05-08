# React Pagination, Sorting and Searching App

This is a React app that displays data in either a grid or a table format, and allows users to paginate through the data, sort it by name or last edited date, and search for specific items by name or description.

The app uses higher-order components (HOCs) to provide pagination, sorting, and searching functionality to the grid and table components. 
React Router has been implemented to allow for viewing of different component pages in the application.
The UI state for pagination, sorting, and searching is preserved across page refreshes using the sessionStorage feature.

## Getting Started

To run this app on your local machine, follow these steps:

1. Clone this repository to your machine by running `git clone https://github.com/username/react-pagination-sorting-searching-app.git` in your terminal, replacing `username` with your own GitHub username.
2. Navigate to the root folder of the project (`cd react-pagination-sorting-searching-app`).
3. Install the dependencies by running `npm install`.
4. Start the app by running `npm start`.
5. Open your web browser and go to `http://localhost:3000` to view the app.

## Usage

Once the app is running, you can use it to display data in a grid or table format. 

### Grid View

To display the data in a grid view, click on the "Grid View" button at the navigation bar of the page. The data will be displayed in a grid, with each item represented by a card that includes its name, image, description, and last edited date.

To navigate through the pages of data, use the pagination buttons at the bottom of the page. You can also sort the data by name or last edited date by clicking on the corresponding buttons at the top of the page. To search for specific items by name, enter a search term in the search bar at the top of the page.

### Table View

To display the data in a table view, click on the "Table View" button at the navigation bar of the page. The data will be displayed in a table, with each item represented by a row that includes its name, description, and last edited date.

You can use the pagination buttons at the bottom of the page to navigate through the pages of data, and you can sort the data by name or last edited date by clicking on the corresponding buttons at the top of the page. To search for specific items by name, enter a search term in the search bar at the top of the page.

## Seed Data

The app uses the `src/Data/mock_data.json` file as seed data for displaying items in the grid and table views.

## Built With

* [React](https://reactjs.org/) - The JavaScript library used for building the user interface.
* [React Icons](https://react-icons.github.io/react-icons/) - The library used for adding icons to the app.
