import { educationService } from "@/services/educationService";
import Link from "next/link";
import { FC } from "react";

interface SectionsPageProps {
    params: {
        subjectId: string,
    }
}

const SectionsPage: FC<SectionsPageProps> = async ({params}) => {
    const sectionList = await educationService.fetchSections();

    return (
        <ul>
            <h1>Секции</h1>
            
            {sectionList.map((section) => {
                if (section.subjectId == params.subjectId) {
                    return (
                        <li key={section.id}>
                            <Link href={`/section/${section.id}`}>{section.name}</Link>
                        </li>
                    )
                }
            })}
        </ul>
    )
};

export default SectionsPage;