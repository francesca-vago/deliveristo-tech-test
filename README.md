# Deliveristo tech test

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

## Tests

You can run tests locally or through Docker containers.

### Run tests locally

To run unit tests locally, simply run the command

```bash
npm run test:unit
```

To run e2e tests you have to install playwright browsers with

```bash
npx playwright install
```

From now on, you can run e2e tests with

```bash
npm run test:e2e
```

### Run tests in Docker

To run tests in Docker you need, of course, Docker as prerequisite.
Then, if you are in a UNIX environment, you can run

```bash
npm t
```

It will call a bash script that will build two containers running tests in the process.

If you are in a Windows environment or want to run the unit and e2e tests independently you can run

```bash
# For Unit tests
docker build -t woofr-unit --target unit --progress plain --no-cache .

# For E2E tests
docker build -t woofr-e2e --target e2e --progress plain --no-cache .
```

## Deploy

You can create a production image with the command

```bash
docker build -t woofr --target prod .
```

It will create a simple image with [Nginx](https://www.nginx.com/) that will serve the builded app.

## Tech Stack

This section explains the decisions that has been made in this project.

### Toolchain

I decided to use Vite as it reduces the compile and load times for the development server.In this case this is a small project, but it definitely would be better for large projects to be bundled in production package.

### Testing

Unit testing with [Vitest](https://vitest.dev/).
End to end testing with [Playwright](https://playwright.dev/)

### API Validation

To check the data that comes from the external APIs, I've used [Zod](https://zod.dev/) schema declaration and validation library, to check it at the application boundaries.

### Styling

For the styling I decided to go with [Vanilla Extract](https://vanilla-extract.style/).
