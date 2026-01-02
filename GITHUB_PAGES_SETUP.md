# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Repository Configuration

Make sure your repository is public on GitHub:

- Go to **Settings → General**
- Ensure the repository is public (required for free GitHub Pages)

### 2. Enable GitHub Pages

- Go to **Settings → Pages**
- Under "Source", select **GitHub Actions**
- The workflow will automatically deploy on push to `main` branch

### 3. Deployment

The site will automatically build and deploy when you:

- Push code to the `main` branch
- The workflow is defined in `.github/workflows/deploy.yml`

## How It Works

### Build Process

- **Vite Build**: Compiles React + Tailwind CSS into static files
- **Output**: Generates static HTML, CSS, and JavaScript in `dist/` folder
- **Routing**: Uses HashRouter (`/#/page`) for client-side routing without server

### Routing

Routes use hash-based routing for GitHub Pages compatibility:

- Home: `/#/`
- Downloads: `/#/downloads`
- Community: `/#/community`
- About: `/#/about`

## Local Testing

Build locally to test before pushing:

```bash
# Install dependencies
pnpm install

# Build the client
pnpm run build:client

# Preview the build
pnpm run preview
```

Then open the preview URL shown in terminal.

## Troubleshooting

### Site not loading

- **Check the workflow**: Go to **Actions** tab and verify the latest workflow run succeeded
- **Verify base path**: Make sure `base: "/"` in `vite.config.ts`
- **Clear browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Styles not loading

- Check browser DevTools Network tab for CSS file errors
- Verify Tailwind CSS build completed in workflow logs

### Routes not working

- Routes use hash-based URLs (`/#/page`)
- Ensure you're using the correct URL format
- Clear browser cache and try again

## Files Modified for GitHub Pages

- `vite.config.ts` - Updated base path and output directory
- `client/App.tsx` - Changed to HashRouter for client-side routing
- `.github/workflows/deploy.yml` - Automated deployment workflow
- `public/404.html` - Fallback page (optional, for edge cases)

## Repository URL

After deployment, your site will be available at:

```
https://<username>.github.io/<repository-name>/
```

Example: If your GitHub username is `fatima` and repo is `Protein3D`:

```
https://fatima.github.io/Protein3D/
```

**Note**: The current configuration uses `/` as the base path for root deployment.
If deploying to a subfolder, update `base: "/"` in `vite.config.ts`.
