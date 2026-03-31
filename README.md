# Effect Digital - Nuxt x Storyblok Boilerplate

An always work-in-progress boilerplate for Nuxt with Storyblok baked in.

## Getting Started

1.  Add the following to the `.npmrc` file (Bun will respect this for private packages):

    ```.npmrc
    //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
    @effect-digital:registry=https://npm.pkg.github.com
    ```

2.  Replace `${NPM_TOKEN}` with a GitHub auth token with **read** permissions or go to **1Password** and search for `NPM Read Package (.npmrc)` and copy the token from there.

3.  Ensure **Bun** is installed:

    ```bash
    bun --version
    ```

4.  Install the dependencies:

    ```bash
    bun install
    ```

5.  Start developing on http://localhost:3000

    ```bash
    bun run dev
    ```

---

## Commands

| Command                    | Description                                                |
| :------------------------- | :--------------------------------------------------------- |
| `bun run dev`              | Spins up local site and watches for file changes.          |
| `bun run build`            | Builds the site for production.                            |
| `bun run lint`             | Runs linting for both styles and scripts.                  |
| `bun run lint:js`          | Runs OxLint against **js/ts/vue** files.                   |
| `bun run lint:css`         | Runs Stylelint against **css** files.                      |
| `bun run typecheck`        | Runs TypeScript type checking via Nuxt.                    |
| `bun run format`           | Checks and formats files using Oxfmt.                      |
| `bun run format:check`     | Checks formatting **only** using Oxfmt.                    |
| `bun run format:write`     | Fixes formatting **only** using Oxfmt.                     |
| `bun run update-storyblok` | Pulls Storyblok components and generates TypeScript types. |

---

## Tooling

| Tool          | Purpose                         |
| :------------ | :------------------------------ |
| **OxLint**    | JavaScript/TypeScript linting   |
| **Oxfmt**     | Code formatting (JS/TS/Vue/CSS) |
| **Stylelint** | CSS linting                     |

---

## Conventions

### Component Naming

Components use **PascalCase** in templates:

```vue
<!-- Correct -->
<SinglePicture />
<SiteHeader />

<!-- Incorrect -->
<single-picture />
<site-header />
```

Components do not require the full path (e.g. `<AtomsSinglePicture />`), as this is overridden in `nuxt.config.ts` - use just the filename (e.g. `<SinglePicture />`).

Each component inside `/components` **must** be named uniquely and with multi-words to follow [Vue's best practice](https://vuejs.org/style-guide/rules-essential#use-multi-word-component-names).

### Atomic Design

The structure follows [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles (Atoms, Molecules, Organisms) in both `/components` and `/assets/css` directories.

Components can be moved between directories easily (e.g. if an Atom grows into a Molecule) without changing references elsewhere.

---

## Local Device Testing

When you start the dev-server with `bun run dev`, a QR code will appear; scan it to test on a real device (on the same network). Alternatively, use the `Network` URL/IP address.

## Hosting

Hosting is on [Netlify](https://app.netlify.com/teams/effect-digital/overview) (unless otherwise stated).

Check the site builds locally to replicate any issues:

```bash
bun run build
```

There is a `netlify.toml` config file for quick Netlify setup.

### Netlify Environment

> [!IMPORTANT]
> Make sure to set an `NPM_TOKEN` variable under `Environment variables` by generating a **GitHub classic personal access token** under the **Effect Dev** account with read scopes.

Basic auth protection is controlled by the `BASIC_AUTH_ENABLED` environment variable in Netlify. When set to `"true"`, the `_headers` file is applied to protect the site.

## Branching Strategy

See [Confluence Article](https://effectdigital.atlassian.net/wiki/spaces/Effect/pages/370343943/Branching+Strategy)

---

## Packages

### Pinia

Pinia is installed by default, with a `ui` store set up for the mobile navigation.

### Marker.io

Marker.io is set up as a plugin and called from `app.vue` - control it via the `.env` file to turn it on and change the Marker.io ID. Good to enable on branches/PRs, and disable on `production`.

### SEO

There are SEO packages installed but not activated; enable them by uncommenting in `nuxt.config.ts`:

| Tool               | Plugin Name           | Details                                                                                                                                                    |
| ------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Robots             | `@nuxtjs/robots`      | Generic `robots.txt` generated                                                                                                                             |
| Google Tag Manager | `nuxt-gtag`           | Runs against an `.env` variable of `NUXT_PUBLIC_GTAG_ID`                                                                                                   |
| Sitemap            | `nuxt-simple-sitemap` | Requires `site.url` config. Runs against a custom API in `/server/api/sitemap/urls.js` which should grab all relevant pages from your CMS and return them. |

### Custom Composables

There is a composable for Modular Content. For other composables, use ['@effect-digital/vue-utils'](https://github.com/effect-digital/vue-utils).

---

## Recommended Extensions

Recommended VS Code extensions are listed in `.vscode/extensions.json`. Install them via the **Extensions** panel in VS Code by searching for the extension names.
