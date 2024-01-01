### 

1. **Create Note**
    - **Method:** `POST`
    - **URL Path:** `/api/notes`
    - **Request Body Format:**
        
        ```json
        {
          "title": "string (required, max length 255)",
          "content": "string (required)"
        }
        
        ```
        
    - **Response Format (Success):**
        
        ```json
        {
          "_id": "string",
          "title": "string",
          "content": "string",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
        
        ```
        
    - **Response Format (Error):**
        
        ```json
        {
          "error": "string"
        }
        
        ```
        
2. **Retrieve All Notes**
    - **Method:** `GET`
    - **URL Path:** `/api/notes`
    - **Request Body Format:** None
    - **Response Format (Success):**
        
        ```json
        [
          {
            "_id": "string",
            "title": "string",
            "content": "string",
            "createdAt": "timestamp",
            "updatedAt": "timestamp"
          },
          // Other notes, if available
        ]
        
        ```
        
    - **Response Format (Error):**
        
        ```json
        {
          "error": "string"
        }
        
        ```
        
3. **Retrieve Single Note**
    - **Method:** `GET`
    - **URL Path:** `/api/notes/:id` (Replace `:id` with the actual ID of the note)
    - **Request Body Format:** None
    - **Response Format (Success):**
        
        ```json
        {
          "_id": "string",
          "title": "string",
          "content": "string",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
        
        ```
        
    - **Response Format (Error):**
        
        ```json
        {
          "error": "string"
        }
        
        ```
        
4. **Update Note**
    - **Method:** `PUT`
    - **URL Path:** `/api/notes/:id` (Replace `:id` with the actual ID of the note)
    - **Request Body Format:**
        
        ```json
        {
          "title": "string (max length 255)",
          "content": "string"
        }
        
        ```
        
    - **Response Format (Success):**
        
        ```json
        {
          "_id": "string",
          "title": "string",
          "content": "string",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
        
        ```
        
    - **Response Format (Error):**
        
        ```json
        {
          "error": "string"
        }
        
        ```
        
5. **Delete Note**
    - **Method:** `DELETE`
    - **URL Path:** `/api/notes/:id` (Replace `:id` with the actual ID of the note)
    - **Request Body Format:** None
    - **Response Format (Success):**
    No content, and the status code should be 204 (No Content).
    - **Response Format (Error):**
        
        ```json
        {
          "error": "string"
        }
        
        ```
