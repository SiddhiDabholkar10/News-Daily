# News App

This is a React-based News App that provides the latest news across various categories using the News API. It features a clean and user-friendly interface, a top-loading progress bar, and routing to different categories like Business, Entertainment, Health, Science, Sports, and Technology.

## Features

- Fetches news articles from the News API.
- Categorized news for better organization.
- Top-loading progress bar to indicate loading state.
- Responsive navigation bar for category switching.
- React Router v6 for smooth navigation between routes.

## Tech Stack

- **React**: Frontend framework.
- **React Router v6**: For routing and navigation.
- **react-top-loading-bar**: For the progress bar.
- **CSS**: For styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/news-app.git
   cd news-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your News API key:
   ```env
   REACT_APP_NEWS_API=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Folder Structure

```
news-app/
├── public/
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── News.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── .env
├── package.json
├── README.md
```

## How to Use

1. Launch the application locally using `npm start`.
2. Navigate through the categories using the navigation bar.
3. View the top headlines and articles for each category.

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `react-top-loading-bar`

## Deployment

To deploy the application, you can use platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/):

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `build/` folder to your hosting platform.

## License

This project is licensed under the MIT License.

---

Feel free to fork this repository and customize it as per your needs!
