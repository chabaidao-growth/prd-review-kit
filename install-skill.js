#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const hermesHome = path.join(process.env.HOME, '.hermes');
const skillsDir = path.join(hermesHome, 'skills', 'prd-review-workflow');

console.log('\n🔧  Installing prd-review-kit skill...\n');

// Create skills directory if not exists
if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir, { recursive: true });
}

const pkgDir = __dirname;

// Copy SKILL.md
const skillMd = fs.readFileSync(path.join(pkgDir, 'SKILL.md'), 'utf8');
fs.writeFileSync(path.join(skillsDir, 'SKILL.md'), skillMd);
console.log('✅ SKILL.md → ~/.hermes/skills/prd-review-workflow/SKILL.md');

// Copy references/
const refsSrc = path.join(pkgDir, 'references');
const refsDest = path.join(skillsDir, 'references');

if (!fs.existsSync(refsDest)) {
  fs.mkdirSync(refsDest, { recursive: true });
}

const refFiles = fs.readdirSync(refsSrc);
for (const file of refFiles) {
  const src = path.join(refsSrc, file);
  const dest = path.join(refsDest, file);
  if (fs.statSync(src).isFile()) {
    fs.copyFileSync(src, dest);
    console.log(`✅ references/${file} → ~/.hermes/skills/prd-review-workflow/references/${file}`);
  }
}

console.log('\n✅ prd-review-kit skill installed successfully!');
console.log('📖 Next time you provide a Feishu PRD link, I\'ll automatically use this skill.');
console.log('   Or run: hermes skills load prd-review-workflow\n');
