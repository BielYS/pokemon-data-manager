How I Made the Pokemon Data Manager
1. Creating the Project Structure
I created a directory by using mkdir in the terminal. After that, I generated the package.json and the tsconfig.json.

2. Installing All the Necessary Dependencies
I installed axios, @types/node, and @types/axios. When I installed axios, I realized I didn't know what it was, so I asked ChatGPT and discovered that it makes HTTP requests in JavaScript. It is very popular because it has an easy interface for making requests. I learned that if I want to code in TypeScript, I need @types/node and @types/axios because TypeScript is a typed language.

3. Creating All Files
I created them by using the command mkdir -p src/modules. ChatGPT also told me to use the command touch, but it doesn't come installed on Windows, so I had to investigate and found out that on Windows I should use New-Item.

4. index.ts
This file is the main entry point of the application. I imported the function pokemonManager and called it in a main() function. I defined the main function with async so that I could use await, which is needed for async operations like making an HTTP request. Then, I called main().

5. pokemonManager.ts
This file is responsible for declaring the Pokémon API URL and importing the function getAPIData(). I defined the API URL as a string and then called getAPIData, passing the URL as an argument. Finally, I printed the data to the console.

6. getAPIData.ts
I imported axios and used it to make the API request, then returned the data obtained from the API. I defined an async function getAPIData that takes the URL as an argument. Then, I used axios to make a GET request to the given URL. Finally, it returns the data from the response.