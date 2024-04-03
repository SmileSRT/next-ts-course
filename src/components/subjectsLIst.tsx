import { ISubject } from "@/types/subject";
import { FC } from "react";

async function fetchSubjects(): Promise<ISubject[]> {
    const response = await fetch(`${process.env.HOSTNAME}/subject/all`);
    const {data} = await response.json();

    return data;
}

const SubjectsList: FC = async () => {
    const subjectsList: ISubject[] = await fetchSubjects();

    return (
        <ul>
            {subjectsList.map((subject) => (
                <li>{subject.name}</li>
            ))}
        </ul>
    );
};

export default SubjectsList;