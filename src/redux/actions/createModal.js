export const openModal = (title) => {
    return {
        type: 'OPEN_MODAL',
        title
    }
}

export const closeModal = (title) => {
    return {
        type: 'CLOSE_MODAL',
        title
    }
}