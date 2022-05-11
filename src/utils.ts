import { apiBaseUrl } from './config.json';

export async function makeRequest<ResponseType>(requestOptions: TodoApiRequestOptions): Promise<ResponseType> {
    const url = new URL(requestOptions.path, apiBaseUrl);
    const headers = new Headers();
    if (requestOptions.isApplicationJson) headers.set('Content-Type', 'application/json');
    if (requestOptions.token) headers.set('Authorization', requestOptions.token);


    let request: RequestInit = { headers };

    if (request.body) {
        request = {
            ...request,
            body: JSON.stringify(requestOptions.body),
            method: requestOptions.method?.toUpperCase() || 'GET'
        }
    }

    const response = await fetch(url.toString(), request);

    if (response.ok) {
        return await response.json();
    }

    throw new Error(response.statusText);
}

export interface TodoApiRequestOptions {
    path: string,
    method?: string,
    body?: any,
    isApplicationJson?: boolean,
    token?: string
}