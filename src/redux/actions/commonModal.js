export const openModal = (title, text) => {
    return {
        type: 'OPEN_MODAL',
        title,
        text
    }
}

export const closeModal = (title) => {
    return {
        type: 'CLOSE_MODAL',
        title
    }
}