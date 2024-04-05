import { educationService } from '@/services/educationService';
import React, { FC } from 'react';

interface ChapterPageProps {
    params: {
        chapterId: string;
    }
}

const ChapterPage: FC<ChapterPageProps> = async ({params}) => {
    const exersiseList = await educationService.fetchExercises();

    return (
        <div>
            <h1>Темы</h1>
        </div>
    );
};

export default ChapterPage;