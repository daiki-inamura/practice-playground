import { words } from "./data";
import { addWord, listMemorizeWords } from "./wordManager";
// 結果を出力
const memorized = listMemorizeWords(words);
console.log("覚えた単語一覧");
memorized.forEach(entry => {
    console.log(`- ${entry.term}: ${entry.definition}`);
});

// 単語を追加
addWord(words,"generic", "型の汎用性を表現する",3);

// 全ての単語を表示
console.log("\n 登録済みの単語一覧");
words.forEach(entry => {
    console.log(`- ${entry.term}: ${entry.definition} (覚えた？${entry.memorized ? "はい" : "いいえ"})`);
})