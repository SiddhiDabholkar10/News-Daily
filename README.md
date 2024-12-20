# News App

This is a React-based News App that provides the latest news across various categories using the News API. It features a clean and user-friendly interface, a top-loading progress bar, and routing to different categories like Business, Entertainment, Health, Science, Sports, and Technology. 

Here's how you can include the concepts of React you've learned in your project in the `README.md`. It's a good way to document your learning and showcase your understanding of React to others reviewing your project.

---

### React Concepts Learned

While building this project, I explored and implemented the following React concepts:

1. **Functional Components**  
   - Leveraged React's functional components for creating reusable UI components like `Navbar`, `News`, etc.

2. **React Hooks**  
   - Used `useState` for managing local state (e.g., progress bar state).
   - Explored React's lifecycle-like behavior within functional components using hooks.

3. **React Router**  
   - Implemented client-side routing using `react-router-dom`.
   - Learned about the differences between `Switch` (legacy) and `Routes` (modern React Router).
   - Dynamically passed parameters like `category` and `country` to routes.

4. **Environment Variables**  
   - Integrated environment variables using `.env` to securely store and access sensitive data like the API key.

5. **Props and State Management**  
   - Learned the difference between `props` and `state` and effectively used them for data passing and state updates.

6. **API Integration**  
   - Implemented API calls to fetch data from a news API.
   - Managed loading states with a `progress` bar using `react-top-loading-bar`.

7. **Conditional Rendering**  
   - Displayed data conditionally based on API responses and loading state.

8. **Component Reusability**  
   - Created modular and reusable components like `News` for different news categories.

9. **CSS Styling**  
   - Styled components using both external CSS files and inline styles to match the UI requirements.

10. **Error Handling in React**  
    - Incorporated proper error handling during API calls to ensure a smoother user experience.

By building this project, I deepened my understanding of React's core concepts, hooks, and best practices in building scalable and interactive user interfaces.

---
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
|   |   ├── NewsItem.js
|   |   ├── NavBar.js
|   |   ├── Spinner.js
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
