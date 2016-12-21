// const initialEntity = {entities: {intent: [{value: ""}]}}
export const entityInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_ENTITY_INFO':
            return action.text
        default:
            return state
    }
}

export const entityPostState = (state = "", action) => {
    switch (action.type) {
        case 'SET_POST_ENTITY_STATE':
            return action.state
        default:
            return state
    }
}
