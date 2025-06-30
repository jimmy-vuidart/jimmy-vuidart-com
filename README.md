# Jimmy VUIDART.com - Portfolio

[jimmy.vuidart.com](https://jimmy.vuidart.com)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages when a new tag is created.

### Deploying with GitHub Actions

1. Make your changes and commit them to the main branch
2. Create a new tag:
   ```bash
   git tag v1.0.0  # Use semantic versioning
   git push origin v1.0.0
   ```
3. The GitHub Action will automatically build and deploy the site to GitHub Pages

The deployed site will be available at: `https://[username].github.io/jimmy-vuidart-com/`

### Custom Domain

If you're using a custom domain:

1. Comment out the `base` property in `astro.config.mjs`
2. Configure your custom domain in GitHub Pages settings

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
