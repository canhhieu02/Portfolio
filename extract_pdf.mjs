import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const buf = readFileSync('e:/ThuctapHoanthien/TT1/CV_Nguyễn Cảnh Hiếu_fresher Frontend.pdf');
const uint8Array = new Uint8Array(buf);

const loadingTask = getDocument({ data: uint8Array, useWorkerFetch: false, isEvalSupported: false });
loadingTask.promise.then(async (doc) => {
  const numPages = doc.numPages;
  let fullText = '';
  for (let i = 1; i <= numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(' ');
    fullText += `--- Page ${i} ---\n` + pageText + '\n';
  }
  console.log(fullText);
}).catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
