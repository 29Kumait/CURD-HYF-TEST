# Introduction

In this test, you will code along to a simple users REST API. To keep things challenging, some details are intentionally omitted, requiring you to ensure the API is deployable. Afterward, you'll create a video to demonstrate the API, explain the code, and answer some questions, which is a common practice for developers.

## Instructions

- Follow the code along in this video: [Simple Users REST API](https://www.youtube.com/watch?v=l8WPWK9mS5M).
- Address the issues listed below in the project.
- Review the video requirements.
- Answer the questions on paper and prepare a script for your video that meets the Goal/Requirements section.
- Record your video. You may need a few attempts to get it right.
- Submit your video by sending the link to @Stas on Slack.

## Issues to Fix

### User Error Handling

1. **PATCH Request Error**: When a PATCH request is made for a non-existent user ID, the server throws an error. Instead, it should return a readable error message, like 'The user with id 123 not found in the database.'

2. **POST Request Validation**: Currently, a POST request can add any JSON object to the database, regardless of its properties. Modify the `createUser` function to validate input and only allow `firstName`, `lastName`, and `age`. All three properties are required when creating a user, and users should be informed of these requirements upon a mistake.

### Usability Issues

3.**Delete Non-existent User**: Deleting a user who doesn't exist still returns a message indicating success. Update this to inform the user that no user with the provided ID exists.

4.**Get Non-existent User**: Requesting a user with an invalid ID returns an empty body. Change this to return a message that the user wasn't found.

### Status Codes

Ensure that you use the correct HTTP status codes for all the new error responses.

### Automated Tests

5.**Add Automated Tests**: There are no automated tests. Add tests for all endpoints using jest and the supertest library, covering both happy and error paths.

## Video Requirements

- **Duration**: Maximum of 12 minutes.
- **Quality**: At least 720p.
- **Content**: The video must show both you and your screen.
- **Coverage**: Include the following:
  - Confirmation of whether this is a REST Application and the REST resource.
  - Operations permitted on the resource(s) and their corresponding HTTP methods.
  - A demo of the application, explaining all routes and their functions.
  - Explanation of code changes made for robustness, including code paths.
  - Explanation of the tests you added.
- **Clarity**: Ensure your code explanations are high level and understandable to someone familiar with node.js.
- **Visibility**: The code must be clearly visible in the video, and you should demonstrate your understanding of the topics.

---

| Method | Description                               | Use-case                        |
|--------|-------------------------------------------|---------------------------------|
| GET    | Fetches data from a resource.             | Viewing or listing information. |
| POST   | Sends data to a resource to create it.    | Creating new entries.           |
| DELETE | Removes a specified resource.             | Deleting entries.               |
| PATCH  | Partially updates a resource.             | Editing parts of an entry.      |
| PUT    | Completely replaces a specified resource. | Editing or creating entries.    |
