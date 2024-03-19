import {$host} from "../index";


export const getImages = async () => {
    const response = await $host.get('images')
    return response.data
}

export const getImageById = async (id) => {
    const response = await $host.get(`image/${id}`)
    return response.data
}

export const addComment = async (imageId, text) => {
    const response = await $host.post(`image/${imageId}/comments`, {
        author: 'Аноним',
        comment: text
    })
    return response.status
}