import fetch from 'isomorphic-fetch'
const SERVER_URL = 'http://localhost:3000';

function setEntityInfo(text) {
    return {
        type: 'SET_ENTITY_INFO',
        text
    }
}

function setPostEntityState(state) {
    return {
        type: 'SET_POST_ENTITY_STATE',
        state
    }
}

function setSelectSentence(sentence) {
    return {
        type: 'SET_SELECT_SENTENCE',
        sentence
    }
}

export function getEntityInfo(sentence)  {
    return function (dispatch) {
        let myInit = { method: 'GET'};
        return fetch(SERVER_URL + '/v1/entities?sentence=' + sentence, myInit)
            .then(response => {
              response.json().then(data => {
                console.log(data)
                dispatch(setSelectSentence(sentence))
                dispatch(setEntityInfo(data))
              })
            })
    }
}

export function postEntityToWit(entities)  {
    return function (dispatch) {
        dispatch(setPostEntityState("loading"))
        let myInit =  {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"entities": entities})
        }
        return fetch(SERVER_URL + '/v1/entities', myInit)
            .then(response => {
              response.json().then(data => {
                console.log(data)
                dispatch(setEntityInfo({}))
                dispatch(setPostEntityState(data.stat))
              })
            })
    }
}
