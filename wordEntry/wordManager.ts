import { WordEntry } from "./word";

// 単語を追加する関数（初期状態で覚えていない）
export function addWord(list: WordEntry[], term: string, definition: string, difficulty: number = 1): void {
const newEntry: WordEntry = {
    term, 
    definition, 
    difficulty, 
    memorized :false,
};
list.push(newEntry);
}

// 単語の一覧を返す関数
export function listWords(list: WordEntry[]): WordEntry[] {
    return list;
}

// 覚えた単語だけ抽出する関数
export function listMemorizeWords(list: WordEntry[]): WordEntry[] {
    return list.filter(entry => entry.memorized);
}