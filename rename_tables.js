const fs = require('fs');
const path = require('path');

const directoryPaths = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'db')
];

const replacements = [
  { regex: /from\(['"]programs['"]\)/g, replacement: "from('marungga_programs')" },
  { regex: /from\(['"]team_members['"]\)/g, replacement: "from('marungga_team_members')" },
  { regex: /from\(['"]content_blocks['"]\)/g, replacement: "from('marungga_content_blocks')" },
  { regex: /from\(['"]site_settings['"]\)/g, replacement: "from('marungga_site_settings')" },
  { regex: /public\.programs\b/g, replacement: "public.marungga_programs" },
  { regex: /public\.team_members\b/g, replacement: "public.marungga_team_members" },
  { regex: /public\.content_blocks\b/g, replacement: "public.marungga_content_blocks" },
  { regex: /public\.site_settings\b/g, replacement: "public.marungga_site_settings" }
];

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && /\.(ts|tsx|js|jsx|sql)$/.test(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directoryPaths.forEach(processDirectory);
console.log('Renaming tables done.');
