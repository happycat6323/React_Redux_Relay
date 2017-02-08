import {browserHistory} from 'react-router'
import firebase from '../../utils/firebase.js'

let FOLDER_NAME = ""

export const handleLoginChange = (loginChange) => {
    return {
        type: 'HANDLE_LOGIN_CHANGE',
        loginChange
    }
}

export function createUser () {
    return (dispatch, state) => {
        firebase.auth().createUserWithEmailAndPassword(state().login.loginChange.email,state().login.loginChange.password)
            .then(result => {
                var userId = firebase.auth().currentUser.uid
                console.log("userId : " + userId)
                browserHistory.push(FOLDER_NAME + '/pet')
                //firebase.database().ref('/' + userId).set({name:'dog'})
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
                browserHistory.push(FOLDER_NAME + '/pet')
                //firebase.database().ref('/' + userId).once('value')
                //    .then(items => {
                //        console.log("dddddddddddddddddddddddddddddddd")
                //        console.log(items.val())
                //    })
            })
            .catch(error => {
                console.log(error)
            })
    }
}