declare function rhymes(aWord: string): {
    rhymes: {
        word: string;
        score: number;
    }[];
    alliterations: {
        word: string;
        score: number;
    }[];
};
export { rhymes };
