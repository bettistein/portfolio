# Portfolio

## How to use

**Make sure to use a node version that uses npm v6:**

```
fnm use 12
```

**Install Project dependencies:**

```
npm install
```

**Start development:**

```
# Start server for development (open localhost:3000 after successful start)
npm start

# Build the website in production mode
npm run build
```

## Deployment

**Netlify:**

- Add your project to netlify
- Define following build task: `npm run netlify`
- Define `build/`as your output folder
