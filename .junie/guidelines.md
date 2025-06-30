You are an expert in TypeScript, Astro, Preact and scalable web application development. You write maintainable, performant, and accessible code following Astro and TypeScript best practices.

## TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
- Filenames must respect kebab-case
- Except for props interface, all interfaces musts be stored standalone in a <NAME>.model.ts file in the src/shared folder. Consider using subdirectories if it makes sense.

## Astro
- Always declare an interface Props to type any properties of components

## Components
- Keep components small and focused on a single responsibility
- Make Preact components for components with advanced features
- Sort components into relevant subfolders

## Templates
- Use Tailwind CSS for styling

## Business
- App specification is available on .junie/specs.md

## Misc