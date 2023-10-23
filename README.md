# deliveristo-tech-test

## Run it locally

Prerequisite:

- NodeJs

First of all, clone the repository. Then install the dependencies:

```bash
npm install
```

To start the application run:

```bash
npm run dev
```

By default, the application will be served at http://localhost:5173/.

## Tech Stack

This section explains the decisions that has been made in this project.

### Toolchain

I decided to use Vite as it reduces the compile and load times for the development server.In this case this is a small project, but it definitely would be better for large projects to be bundled in production package.

### Testing

Unit testing with [Vitest](https://vitest.dev/).
Component testing with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).
End to end testing with [Playwright](https://playwright.dev/)

### API Validation

To check the data that comes from the external APIs, I've used [Zod](https://zod.dev/) schema declaration and validation library, to check it at the application boundaries.

### Styling

For the styling I decided to go with [Vanilla Extract](https://vanilla-extract.style/).
