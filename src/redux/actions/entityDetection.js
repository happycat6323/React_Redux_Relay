import {ToTvHttp} from '../../utils/totvhttp.js';

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

export function setEntities(entities) {
  return {
    type: 'SET_ENTITIES',
    entities
  }
}

export function getEntityInfo(sentence)  {
  return function (dispatch) {
    let _params = {sentence: sentence}
    ToTvHttp.get("/v1/entities", _params, (response) => {
      dispatch(setSelectSentence(response._text))
      dispatch(setEntityInfo(response))
    })
  }
}

export function postEntityToWit(entities)  {
  return function (dispatch) {
    dispatch(setPostEntityState("loading"))
    let _params = {"entities": entities}
    ToTvHttp.post("/v1/entities", _params, (response) => {
      console.log(response)
      dispatch(setEntityInfo({}))
      dispatch(setPostEntityState(response.stat))
    })
  }
}
