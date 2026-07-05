const fs = require('fs');
const path = require('path');

const directoryPaths = [
  path.join(__dirname, 'src/app'),
  path.join(__dirname, 'src/utils/supabase')
];

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      if (fullPath.endsWith('server.ts')) {
        const newContent = content.replace('export function createClient() {', 'export async function createClient() {').replace('const cookieStore = cookies()', 'const cookieStore = await cookies()');
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      } else {
        const newContent = content.replace(/const supabase = createClient\(\)/g, 'const supabase = await createClient()');
        if (newContent !== content) {
          content = newContent;
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
console.log('Update createClient done.');
