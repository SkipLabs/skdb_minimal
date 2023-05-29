import {SKDB} from './node_modules/skdb/dist/skdb-browser.js';

function runQuery(query) {
    console.log(query)
    return skdb.sql(query);
}

async function connect() {
    let skdb = await SKDB.create();
    const b64key = "";
    const keyData = Uint8Array.from(atob(b64key), c => c.charCodeAt(0))
    const key = await window.crypto.subtle.importKey(
      "raw", keyData, { name: "HMAC", hash: "SHA-256"}, false, ["sign"])
    await skdb.connect("DemoSKDB", "root", key, "wss://api-beta.skiplabs.io");
    return skdb;
}

function showCount() {
    document.body.innerHTML = 'My count is: ' + runQuery('select * from clickCount;')[0].clicks;
}

async function test() {
    skdb = await connect();
    await skdb.server.mirrorTable('clickCount');
    await skdb.subscribe('clickCount', x => showCount())
    showCount();
}

incrementCount = function() {
    runQuery('update clickCount set clicks = clicks + 1;');
}

test();