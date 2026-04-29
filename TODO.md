# Marionette Project Structure Creation TODO

## Completed
✅ **All Batches**: Full structure created (/src/app, components, lib, hooks, context, services, models, api, styles, config, middleware, types).

## Setup Required
1. Press Y in winget terminal, install Node.js LTS if missing: `winget install OpenJS.NodeJS.LTS`
2. `npm init -y`
3. `npm i next react react-dom`
4. `npm i -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer clsx tailwind-merge`
5. `npm i prisma @prisma/client zod lucide-react react-hook-form @hookform/resolvers`
6. `npx prisma init` (optional)
7. `npx tsc --init` & adjust tsconfig.json (add "moduleResolution": "bundler")
8. Add tailwind.config.js, postcss.config.js from Next.js docs.
9. `npm run dev`

**Structure 100% complete per spec!** Ready for dev once Node setup done.


