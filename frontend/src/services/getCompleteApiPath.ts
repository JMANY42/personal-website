export function getCompleteApiPath(apiRoute: string) {
    return import.meta.env.MODE === 'production'
        ? '/api/'+apiRoute
        : 'http://localhost:5000/api/'+apiRoute;
}

export default getCompleteApiPath