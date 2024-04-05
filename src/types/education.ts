interface ITotalInfo {
    id: string;
    name: string;
    orderNumber: number;
}

export interface ISubject extends ITotalInfo {}

export interface ISection extends ITotalInfo {
    subjectId: string;
}

export interface IThemes extends ITotalInfo {
    chapterId: string;
}

export interface IChapter extends ITotalInfo {
    sectionId: string;
    themes: IThemes;
}

export interface IExercise {
    id: string
    themeId: string
    title: string
    answerBlocks: string
    bodyBlocks: string
}



