const fs = require('fs');
const path = require('path');

const outputDir = '/Users/tmthree/Project/allpink_sale/public/images/products';

const products = [
  { file: 'pp-trang', label: 'PP Trắng', bg: '#f8f9fa', pellet: '#e8e8e8', highlight: '#d0d0d0' },
  { file: 'pp-xanh-duong', label: 'PP Xanh Dương', bg: '#e3f2fd', pellet: '#4A90D9', highlight: '#3A7BC8' },
  { file: 'pe-trong', label: 'PE Trong', bg: '#f1f8ff', pellet: '#c8dff0', highlight: '#a8c8e0' },
  { file: 'hdpe-xanh-la', label: 'HDPE Xanh Lá', bg: '#e8f5e9', pellet: '#4CAF50', highlight: '#388E3C' },
  { file: 'pp-do', label: 'PP Đỏ', bg: '#ffebee', pellet: '#E53935', highlight: '#C62828' },
  { file: 'pp-hon-hop', label: 'PP Hỗn Hợp', bg: '#fff3e0', pellet: '#FF9800', highlight: '#F57C00' },
  { file: 'ldpe-trang-duc', label: 'LDPE Trắng Đục', bg: '#f5f5f5', pellet: '#dce0e3', highlight: '#c0c8d0' },
];

const mixedColors = ['#E53935', '#4A90D9', '#4CAF50', '#FF9800', '#9C27B0', '#e8e8e8', '#FDD835'];

function pellets(mainColor, count, isMixed) {
  let out = '';
  for (let i = 0; i < count; i++) {
    const cx = 60 + Math.random() * 480;
    const cy = 60 + Math.random() * 380;
    const r = 10 + Math.random() * 16;
    const color = isMixed ? mixedColors[Math.floor(Math.random() * mixedColors.length)] : mainColor;
    const op = (0.6 + Math.random() * 0.4).toFixed(2);
    out += `  <circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${r.toFixed(0)}" fill="${color}" opacity="${op}"/>
  <circle cx="${(cx - r * 0.3).toFixed(0)}" cy="${(cy - r * 0.3).toFixed(0)}" r="${(r * 0.3).toFixed(0)}" fill="white" opacity="0.3"/>\n`;
  }
  return out;
}

products.forEach(p => {
  const isMixed = p.file === 'pp-hon-hop';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <rect width="600" height="600" fill="${p.bg}" rx="12"/>
  <rect x="30" y="30" width="540" height="440" rx="16" fill="white" opacity="0.6"/>
${pellets(p.pellet, 90, isMixed)}
  <rect x="0" y="480" width="600" height="120" fill="white"/>
  <line x1="0" y1="480" x2="600" y2="480" stroke="#e5e7eb" stroke-width="1"/>
  <text x="300" y="525" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="26" font-weight="700" fill="#1f2937">${p.label}</text>
  <text x="300" y="558" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#6b7280">Hạt nhựa tái chế chất lượng cao</text>
</svg>`;
  fs.writeFileSync(path.join(outputDir, `${p.file}.svg`), svg);
  console.log(`✓ ${p.file}.svg`);
});
console.log('\nDone! 7 product placeholders created.');
