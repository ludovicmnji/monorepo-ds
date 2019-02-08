# monorepo-ds

## Setup

After cloning the repository and be sure to use the correct Node version (> v10), run :

```bash
npm install
npm run bootstrap
```

Then, build the library with :

```bash
cd packages/components
npm run build
```

Finally, build the website with :

```bash
cd packages/website
npm run build
npx serve -s build
```
