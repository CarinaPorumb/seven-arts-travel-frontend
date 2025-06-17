export function getArtObjectsList(apiResponse) {

    if (!apiResponse || !Array.isArray(apiResponse.content)) {
        console.warn("Invalid API response format: ", apiResponse)
        return [];
    }

    return apiResponse.content.map((item) => ({
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        location: item.location,
        artCategory: item.artCategory,
        artObjectType: item.artObjectType,
    }));

}
