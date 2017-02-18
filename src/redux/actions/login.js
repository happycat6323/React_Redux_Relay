import {browserHistory} from 'react-router'
import firebase from '../../utils/firebase.js'

import {createPet} from './pet.js'

let FOLDER_NAME = ""

export const handleLoginChange = (loginChange) => {
    return {
        type: 'HANDLE_LOGIN_CHANGE',
        loginChange
    }
}

export const setUserId = (userId) => {
    return {
        type: 'SET_USER_ID',
        userId
    }
}

export function createUser () {
    return (dispatch, state) => {
        firebase.auth().createUserWithEmailAndPassword(state().login.loginChange.email,state().login.loginChange.password)
            .then(result => {
                var userId = firebase.auth().currentUser.uid
                console.log("userId : " + userId)
                dispatch(setUserId(userId))
                browserHistory.push(FOLDER_NAME + '/pet')
            })
        .catch(error => {
                console.log(error)
            })
    }
}

export function loginUser () {
    return (dispatch, state) => {
        firebase.auth().signInWithEmailAndPassword(state().login.loginChange.email,state().login.loginChange.password)
            .then(result => {
                var userId = firebase.auth().currentUser.uid
                console.log("userId : " + userId)
                dispatch(setUserId(userId))
                firebase.database().ref('/' + userId).once('value')
                    .then( items => {
                        items.forEach(item => {
                            dispatch(createPet(item.val(), item.key))
                        })
                    })
                browserHistory.push(FOLDER_NAME + '/pet')
            })
            .catch(error => {
                console.log(error)
            })
    }
}