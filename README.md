# Shared App Shell, State, Routing and Components Example

This example demos a basic host application loading remote component.

- `shell` is the App Shell
- `home` - standalone application for homepage
- `searchResults` - standalone application that displays a list of ads for a given category
- `view-item-page` - standalone application to view an individual ad

The data is delivered by a separate GraphQL api layer called api 

# Running Demo

Run `yarn start`. This will build all the apps `shell`, `home`, `searchResults`, `view-item-page`, on different ports as shown below

- [localhost:3000](http://localhost:3000/) (HOST) - `shell`
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE) - `home`
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE) - `searchResults`
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE) - `view-item-page`
- [localhost:8888](http://localhost:8888/)  - `api GraphQL api layer`

It is styled using [tailwind css](https://tailwindcss.com/).
