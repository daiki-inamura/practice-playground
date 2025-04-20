// 型の定義
export type WordEntry = {
    term: string;   // 単語
    definition: string; // 単語の意味
    difficulty?: number;    //  難しさ（1〜5）
    memorized: boolean; // 覚えたかどうか（true/false）
};