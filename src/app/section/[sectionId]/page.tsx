import { educationService } from '@/services/educationService';
import Link from 'next/link';
import React, { FC } from 'react';

interface SectionPageProps {
    params: {
        sectionId: string;
    }
}

const SectionPage: FC<SectionPageProps> = async ({params}) => {
    const chaptersList = await educationService.fetchChapters();

    return (
        <ul>
            <h1>Главы</h1>
            
            {chaptersList.map((chapter) => {
                if (chapter.sectionId == params.sectionId) {
                    return (
                        <li key={chapter.id}>
                            <Link href={`/chapter/${chapter.id}`}>{chapter.name}</Link>
                        </li>
                    )
                }
            })}
        </ul>
    );
};

export default SectionPage;