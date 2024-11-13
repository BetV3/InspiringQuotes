# Quote Inspiration API

An API designed to provide inspiring quotes with various query options, such as retrieving random quotes, searching by author, and fetching quotes with specific keywords.

### Summary for Resume
> "Developed a secure, feature-rich API to retrieve, search, and display inspirational quotes, supporting efficient querying and multiple endpoint options."

---

## Features

- **Retrieve a Random Quote**: Access a randomly selected quote.
- **Fetch by ID**: Obtain a specific quote using its unique ID.
- **Limited Quotes**: Retrieve a specified number of quotes.
- **Search by Keyword or Author**: Find quotes by searching for specific keywords or authors.

---

## Endpoints

### 1. **GET /random**
   - **Description**: Returns a random quote.
   - **Response**:
     - **200 OK**: JSON object containing the random quote.
     - **404 Not Found**: If no quote is found.
     - **500 Internal Server Error**: In case of server errors.

### 2. **GET /id/:id**
   - **Description**: Fetches a quote by its unique ID.
   - **Parameters**:
     - `id` (String): The unique ID of the quote.
   - **Response**:
     - **200 OK**: JSON object of the quote.
     - **404 Not Found**: If the ID does not match any quote.
     - **500 Internal Server Error**: For server errors.

### 3. **GET /:limit**
   - **Description**: Retrieves a limited number of quotes.
   - **Parameters**:
     - `limit` (Integer): The number of quotes to return.
   - **Response**:
     - **200 OK**: JSON array of quotes up to the specified limit.
     - **404 Not Found**: If no quotes are available.
     - **500 Internal Server Error**: For server issues.

### 4. **GET /search**
   - **Description**: Searches for quotes by content or author.
   - **Query Parameters**:
     - `quote` (String): Searches quotes containing this keyword.
     - `author` (String): Searches quotes by a specific author.
   - **Response**:
     - **200 OK**: JSON array of matching quotes.
     - **404 Not Found**: If no matching quotes are found.
     - **500 Internal Server Error**: For server errors.
   - **Notes**: Provide either `quote` or `author` as a query parameter; if none are provided, returns a 404 error for invalid search.

---

## Error Handling

All endpoints handle errors, including:
- **404 Not Found**: Returned if no quotes are found for the requested resource.
- **500 Internal Server Error**: Returned in case of server or unexpected errors.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/QuoteInspirationAPI.git
   cd QuoteInspirationAPI
2. Install dependencies:
   ```bash
   npm install
3. Start the Server:
   ```bash
   npm start
### Technologies Used
- Node.js with Express.js: For server and API routes.
- MongoDB with Mongoose: For Database management
- JavaScript: Core Language used for API functionality
