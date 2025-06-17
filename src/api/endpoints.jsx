export const API_BASE_URL = "http://localhost:8080/api"

export const ENDPOINT = {
    ART_OBJECT: `${API_BASE_URL}/art-objects`
}

export function getArtObjectTypeEndpoint(artObjectType, page = 0, size = 20) {
    return `${ENDPOINT.ART_OBJECT}/type?artObjectType=${artObjectType}&page=${page}&size=${size}`;
}