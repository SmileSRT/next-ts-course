import { IChapter, IExercise, ISection, ISubject, IThemes } from "@/types/education";
import {requestsService} from "./requestsService";

class EducationService {
    async fetchSubjects () {
        const response = await requestsService.get<ISubject[]>('/subject/all');

        return response;
    }

    async fetchSections () {
        const response = await requestsService.get<ISection[]>('/section/all');
        
        return response;
    }

    async fetchChapters () {
        const response = await requestsService.get<IChapter[]>('/chapter/all');

        return response
    }

    async fetchThemes () {
        const response = await requestsService.get<IThemes[]>('/themes/all');
    }

    async fetchExercises () {
        const response = await requestsService.get<IExercise[]>('/exercise/all');

        return response;
    }
}

export const educationService = new EducationService();