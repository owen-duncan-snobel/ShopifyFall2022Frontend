# Shopify Fall 2022 Frontend challenge

<p align="center">
 <img src="https://github.com/owen-duncan-snobel/ShopifyFall2022Frontend/blob/master/gifs/autocomplete.gif" width="500" height="300">

 <img src="https://github.com/owen-duncan-snobel/ShopifyFall2022Frontend/blob/master/gifs/localstorage.gif" width="500" height="350">
 </p>

  <p align="center">
    <a href="https://gentle-sea-68947.herokuapp.com/">View Demo</a> 
 <br></br>
 https://gentle-sea-68947.herokuapp.com/
 
  </p>

### Built With

* [React.js](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://beta.openai.com/signup](https://beta.openai.com/signup)
2. Clone the repo
   ```sh
   git clone https://github.com/owen-duncan-snobel/ShopifyFall2022Frontend.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a .env file and Enter your API in the `.env`
   ```js
   REACT_APP_OPENAI_SECRET='ENTER YOUR API'; // do not use the enter the API key with the single quotes
   ```

### Add ons Implemented

For the Fun with AI site I ended up using local storage for persisting the users, prompts and responses on a page refresh. I also stored the users inputed text on refresh. I then created a Marquee component that had clickable text for finding quick prompts in the text input field.

By clicking on any of the scrolling words it will automatically fill the input field with an example prompt that can be used.


