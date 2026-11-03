export const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'

// skill name -> Devicon folder. `mono` marks black logos that need inverting in dark mode.
export const icons = {
  JavaScript: { id: 'javascript' },
  'TypeScript (basic)': { id: 'typescript' },
  HTML: { id: 'html5' },
  CSS: { id: 'css3' },
  SASS: { id: 'sass' },
  'React.js': { id: 'react' },
  'Node.js': { id: 'nodejs' },
  'Express.js': { id: 'express', mono: true },
  Bootstrap: { id: 'bootstrap' },
  jQuery: { id: 'jquery' },
  'Material UI': { id: 'materialui' },
  MongoDB: { id: 'mongodb' },
  Mongoose: { id: 'mongoose' },
  Git: { id: 'git' },
  GitHub: { id: 'github', mono: true },
  'VS Code': { id: 'vscode' },
  Vitest: { id: 'vitest' },
}

export const iconUrl = (icon) => `${ICON_BASE}/${icon.id}/${icon.id}-original.svg`
