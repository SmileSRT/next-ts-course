import { educationService } from '@/services/educationService';
import { FC } from 'react';
import Link from 'next/link';

const SubjectsPage: FC = async () => {
    const subjectsList = await educationService.fetchSubjects();

    return (
        <ul>
            <h1>Предметы</h1>
            
            {subjectsList.map((subject) => (
                <li key={subject.id}>
                    <Link href={`/subject/${subject.id}`}>{subject.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default SubjectsPage;