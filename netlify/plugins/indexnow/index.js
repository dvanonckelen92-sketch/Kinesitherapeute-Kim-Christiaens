// Meldt na elke geslaagde productie-deploy alle URL's uit de sitemap aan bij IndexNow
// (Bing, Yandex, Seznam, Naver, ...). Een fout hier laat de deploy nooit mislukken.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const HOST = 'kimchristiaens.be';
const KEY = '141be9aadb21f3a37c5e1b3875dbcb65';

export const onSuccess = async ({ constants }) => {
  if (process.env.CONTEXT !== 'production') {
    console.log('IndexNow: overgeslagen (geen productie-deploy)');
    return;
  }
  try {
    const dir = constants.PUBLISH_DIR;
    const files = (await readdir(dir)).filter((f) => /^sitemap-\d+\.xml$/.test(f));
    const urlList = [];
    for (const f of files) {
      const xml = await readFile(join(dir, f), 'utf8');
      for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urlList.push(m[1]);
    }
    if (!urlList.length) {
      console.log('IndexNow: geen URL\'s gevonden in de sitemap');
      return;
    }
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList,
      }),
    });
    console.log(`IndexNow: ${urlList.length} URL's ingediend, status ${res.status}`);
  } catch (err) {
    console.log(`IndexNow: indienen mislukt (${err.message})`);
  }
};
