![](https://imgur.com/jQBJAFC.png)

# MonoRepo Sample using NX

> Monorepo sample only focused **only on core concepts of Nx monorepo**. It has basic Azure CI/CD pipeline also.

## Learning Objectives

In this repo you will learn below:

- Create Angular Projects with Nx Monorepo
- Create Multiple Angular Apps
- Restrict Commit with conventional commit comments
- Restrict dependency graph using Nx Dependency constrains
- Implement build and CI/CD using Azure Pipeline and publish artifacts to Azure Pipeline
- Azure CI/CD build badge to update build live status.

⚠️ **Note**: This repo is demonstrating the core capabilities of Nx Monorepo. I have done very basic CI/CD work here. For extensive CI/CD work please visit my other repo.


## Artifacts published in the Azure pipeline

![](https://imgur.com/j1olSsa.png)

## Azure Build CI/CD pipeline trigger

As soon as you push code CI/CD pipeline will trigger. That will build angular affected app and related libraries. Finally it will publish the artifacts to Azure pipeline.

![](https://imgur.com/BLeftnR.png)

## How to run this project?

- Clone to your local box
- Run `npm ci` to restore npm packages
- Run below 2 scripts to see both admin and client apps in action.

### Run Admin App

```
nx serve onlinestore-admin --port=4200
```

Visit: http://localhost:4200/adduser

![](https://imgur.com/0q0zzhe.png)

### Run Client App

```
nx serve onlinestore-client --port=4310
```

Visit: http://localhost:4310/products

![](https://imgur.com/c7T0oh9.png)

Visit: http://localhost:4310/users

![](https://imgur.com/K3SVhKx.png)

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc. as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@myorg/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
