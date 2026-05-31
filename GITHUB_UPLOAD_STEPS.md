# GitHub Upload Steps

Upload only the files in this package to the `kimeguri/recycle` repository.

Do not upload these folders:

- `node_modules`
- `dist`
- `work`
- `outputs`
- `.git`

Important files that must be included:

- `.github/workflows/deploy.yml`
- `src/App.tsx`
- `src/main.tsx`
- `src/index.css`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`

After upload:

1. Open the GitHub repository.
2. Go to `Settings`.
3. Go to `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Go to the `Actions` tab.
6. Wait for `Deploy to GitHub Pages` to complete.

Site URL:

```txt
https://kimeguri.github.io/recycle/
```
