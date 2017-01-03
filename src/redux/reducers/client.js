import PushClient from '../../utils/push-client.js'

export const client = (state = {}, action) => {
    let client = new PushClient.Client('http://push.2tvnow.com/pushservice', {
        timeout: 20,
        retry: 5
    })

    let clientAuth = {
        outgoing:  (message, callback) => {
            message.ext = message.ext || {}
            message.ext.accessToken = "ekdgb5ffeb1iaaj3upt8qqr8txo7hiy2czibqw97"
            message.ext.authToken = "yrgXDRY8U9cvQCVksCqALXRbywnMViRTS210ISQf"
            callback(message)
        }
    }

    client.addExtension(clientAuth)

    return client
}

export const subscribeObject = (state = [], action) => {
    switch (action.type) {
        case 'SET_SUBSCRIBE':
            return action.subscribeObject
        default:
            return state
    }
}

export const pushMessage = (state = [], action) => {
    switch (action.type) {
        case 'HANDLE_PUSH_MESSAGE':
            const newMessage = {
                message: action.message,
                role: action.role,
                time: action.time
            }
            return [...state,newMessage]
        default:
            return state
    }
}

export const plots = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLOT':
            return action.plots
        default:
            return state
    }
}

export const currentPlot = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PLOT':
            const currentPlot = {
                plot: action.plot,
                index: action.index
            }
            return currentPlot
        default:
            return state
    }
}