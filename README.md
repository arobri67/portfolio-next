This is my Nextjs starter project (10/12/2024)

What is included:

## Shadcn/UI
I just setup with shadcn/ui and added a button component
- Button

## TailwindCSS

- font-serif, font-sans and container
## ESLint Rules

Using `antfu` ESLint configuration which includes (it will also format the code):

### Base Rules
- Uses `eslint:recommended` as the foundation
- Enforces strict TypeScript rules
- Includes `eslint-plugin-import` rules

### Style Rules
- Double quotes for strings (customized)
- Semicolons required (customized)
- Comma dangle for multiline
- 2 spaces indentation
- No unused imports
- Enforces consistent spacing
- Enforces consistent line breaks
- Brace style must be "1tbs" (one true brace style)

### TypeScript Specific
- Strict type checking
- Consistent type imports
- No explicit `any`
- Enforces explicit return types on functions
- Use `type` instead of `interface` for type definitions

### Import/Export Rules
- Ordered imports
- No duplicate imports
- No mutable exports
- Consistent import type
- Import sorting with internal patterns (@/)

### Framework & Tools
- Next.js specific rules and core web vitals
- JSX accessibility rules (jsx-a11y)
- Tailwind CSS rules
- React hooks rules

### Code Quality
- No console statements (warning)
- No top-level await
- No process.env usage (must use configuration system)
- File names must be in kebab-case (except README.md)

### File Support
ESLint is configured to validate:
- JavaScript/TypeScript
- React/JSX
- HTML/CSS
- JSON/YAML
- Markdown
- And more...

For more details, visit [antfu/eslint-config](https://github.com/antfu/eslint-config)
