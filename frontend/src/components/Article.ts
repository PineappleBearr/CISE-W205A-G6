export type Article = {
    _id?: string;
    title?: string;
    authors: string[];
    source?: string;
    doi?: string;
    yearPub?: number;
    claim?: string;
    status?: string;
    submitDate?: Date;
    processDate?: Date;
}

export const DefaultEmptyArticle: Article = {
    _id: undefined, 
    title: '', 
    authors: [],
    source: '',
    doi: '',
    claim: '',
    yearPub: 1970,
    status: 'submited',
    submitDate: undefined,
    processDate: undefined,
}
