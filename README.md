# monorepo-ds

## Setup

After cloning the repository and be sure to use the correct Node version (> v10), run :

```bash
yarn install
yarn bootstrap
```

Then, build the library with :

```bash
yarn build
```

or

```bash
cd packages/components
yarn build

cd packages/website
yarn build
```

Finally, serve the website (http://localhost:5000) with :

```bash
yarn serve
```

or

```bash
cd packages/website
yarn serve
```
