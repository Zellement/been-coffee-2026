# Effect Digital - Nuxt Boilerplate

An always work-in-progress boilerplate for Nuxt. 🛠️

## Getting Started (Using Bun) 🚀

1.  Add the following to the `.npmrc` file (Bun will respect this for private packages):

    ```.npmrc
    //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
    @effect-digital:registry=https://npm.pkg.github.com
    ```

2.  Replace `${NPM_TOKEN}` with a GitHub auth token with **read** permissions or go to **1Password** and search for `NPM Read Package (.npmrc)` and copy the token from there.

3.  Change your Node version (or ensure **Bun** is installed):

    ```bash
    # npm (for nvm)
    nvm use
    # Check Bun is installed
    bun --version
    ```

4.  Install the dependencies:

    ```bash
    # Bun (fastest way to install dependencies)
    bun install
    ```

5.  Start developing on http://localhost:3000

    ```bash
    # Bun
    bun run dev
    ```

---

## Bun Commands

The following commands use Bun to execute scripts defined in your `package.json`.

| Command                | Description                                            |
| :--------------------- | :----------------------------------------------------- |
| `bun run dev`          | Spins up local site and watches for file changes.      |
| `bun run lint`         | Runs linting for both styles and scripts.              |
| `bun run lint:css`     | Runs stylelint against **scss** files.                 |
| `bun run lint:js`      | Runs Eslint against **js/ts/vue** files.               |
| `bun run format`       | Checks and formats files according to Prettier config. |
| `bun run format:check` | Checks files **ONLY** according to Prettier config.    |
| `bun run format:write` | Formats files **ONLY** according to Prettier config.   |

---

**Note:** For all other sections (Local Device Testing, Deployment, Atomic Design principles, Components, Pinia, Other Packages, SEO, Custom Composables, Netlify, and Recommended Extensions), the content remains the same as it describes concepts, configurations, or packages that are agnostic to the package manager (`npm` vs. `bun`).

## Local Device Testing

If you wish to test on a device (i.e. a phone), when you start the dev-server with `npm run dev`, a QR code will appear; scan it. Boom, magic development server on a real device (on the same network). Alternatively, ping the `Network` URL/IP address to a different device (again, on the same network).

## Hosting

Hosting for new Nuxt 3 sites is on [Netlify](https://app.netlify.com/teams/effect-digital/overview) (unless otherwise stated).

Check the site builds locally to replicate any issues:

```bash
# Bun
bun run build
```

---

There is a `netlify.toml` config file for quick Netlify setup.

## Branching Strategy

See [Confluence Article](https://effectdigital.atlassian.net/wiki/spaces/Effect/pages/370343943/Branching+Strategy)

## Atomic Design principles

The structure of this boilerplate is designed around [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles, following the approach of Atoms, Molecules and Organisms.

This is evidenced in both the `/components` and `/assets/scss` directories.

## Components

Components do not require the full path to use (e.g. `<atoms-single-picture />`), as this is overridden inside the `nuxt.config.ts` - instead, you can use just the filename (e.g. `<single-picture />`).

Each component inside `/components` **must** be named uniquely and with multi-words to follow [Vue's best practice](https://vuejs.org/style-guide/rules-essential#use-multi-word-component-names).

This also means components can be moved between directories easily (for example if an Atom grows too big and becomes a Molecule) without having to change any references anywhere else.

## Pinia

Pinia is installed by default, and has a `ui` store set up for the mobile navigation.

## Other Packages

### Marker.io

Marker.io is set up as a plugin and called from `app.vue` - control it via the `.env` file to turn it on and change the Marker.io ID.

This limits loading it unless the `.env` is `true` which improves page speed. Good to enable on branches/PRs, and disable on `production`.

## SEO

There are three packages already installed but not activated; enable any of them by uncommenting them in `nuxt.config.ts`:

| Tool               | Plugin Name           | Details                                                                                                                                                                                                                                                                      |
| ------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Robots             | `@nuxtjs/robots`      | Generic `robots.txt` generated                                                                                                                                                                                                                                               |
| Google Tag Manager | `nuxt-gtag`           | Runs against an `.env` variable of `NUXT_PUBLIC_GTAG_ID`                                                                                                                                                                                                                     |
| Sitemap            | `nuxt-simple-sitemap` | Requires `site.url` config - best to use an `.env` variable. Also runs against a custom API found in `/server/api/sitemap/urls.js` - this file should be used to grab all relevant pages from your CMS and return them. The file has an example taken from a Contentful CMS. |

## Custom Composables

There is a compsable for Modular Content. Otherwise, please use ['@effect-digital/vue-utils'](https://github.com/effect-digital/vue-utils) for other composables.

### Usage of custom composables

Visit `/components/organisms/_modular-content-blocks/KitchenSink.vue` for examples on how to use them.

### Netlify

> [!IMPORTANT]
> Make sure to set an `NPM_TOKEN` variable under `Environment variables` by generating a **GitHub classic personal access token** under the **Effect Dev** account with read scopes.

## Recommended Extensions

### Visual Code

Recommended extensions have been added under `.vscode` -> `extensions.json` and can be added in several ways.

1. By going to **Extensions** in Visual Code and adding any recommended extensions which match the list under `extensions.json`.
2. Alternatively copying and pasting the extension names from `extensions.json` into the **Extensions** search bar to locate and install a recommended package.
