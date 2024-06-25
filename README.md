# Menu Builder (menu-builder)

An Electron app that provides a gui tool to help build navigation menus for websites.

It uses the Quasar framework. Since this tool was primarily for myself, I threw it together in a few hours and haven't done any real documentation.

If you're a developer, though, you'll likely be able to figure everything out. If you happen to be using the Quasar framework, then you might grab /src/components/MenuComopnent.vue, which is a recursive menu built from the tree built by the tool.

It provides methods to export the menu tree you build, and to import one that was previously built.

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
