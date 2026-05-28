import fs from 'fs';
import path from 'path';

function compressAndSave(srcPath, destDir) {
  try {
    const raw = fs.readFileSync(srcPath, 'utf8');
    const minified = JSON.stringify(JSON.parse(raw));
    const fileName = path.basename(srcPath);
    const destPath = path.join(destDir, fileName);
    fs.writeFileSync(destPath, minified, 'utf8');
    console.log(`✅ 已生成: ${destPath}`);
  } catch (err) {
    console.error(`❌ 失败 ${srcPath}:`, err.message);
  }
}

function traverseDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.error(`源目录不存在: ${srcDir}`);
    return;
  }
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcFull = path.join(srcDir, entry.name);
    const destFull = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      traverseDir(srcFull, destFull);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.geojson')) {
      compressAndSave(srcFull, destDir);
    }
  }
}

// 配置路径
const sourceDir = './src/assets/geojson';    // 原始文件夹
const outputDir = './src/assets/geojson';// 压缩后输出文件夹

traverseDir(sourceDir, outputDir);
console.log('\n📦 导出完成');