class RequestsService {
    async get<T> (url: string): Promise<T> {
        const response = await fetch(process.env.API_HOSTNAME + url)
        const {data} = await response.json();

        return data;
    }
}

export const requestsService = new RequestsService();