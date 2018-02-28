# styled-components-issue

## Setup

After cloning the repository and be sure to use the correct Node version (> 9.5.0), run :

```bash
npm install
npx lerna bootstrap
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

You should see a big error in Chrome console.
