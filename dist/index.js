"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function listMemorizeWords(entries) {
    // ここでmemorized === trueのものだけ返す
    return entries.filter(entry => entry.memorized);
}
// 結果を出力
const memorized = listMemorizeWords(data_1.words);
console.log("覚えた単語一覧");
memorized.forEach(entry => {
    console.log(`- ${entry.term}: ${entry.definition}`);
});
