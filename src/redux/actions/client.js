import moment from 'moment'

import plotObject from '../../../plot.json'

export function subscribe  (channel)  {
    return (dispatch, state) => {
        let subscribeObject = state().client.client.subscribe("/" + channel, (message) => {
            let time = moment().format('YYYY-MM-DD HH:mm:ss')
            console.log("[接收到推播訊息]" + time + " - " + message.message + " - "+ message.role)
            dispatch(handlePushMessage(message, time))
        })
        dispatch(setSubscribe(subscribeObject))
    }
}

export const setSubscribe = (subscribeObject) => {
    return {
        type: 'SET_SUBSCRIBE',
        subscribeObject
    }
}

export const handlePushMessage = (message, time) => {
    return {
        type: 'HANDLE_PUSH_MESSAGE',
        message:message.message,
        role:message.role,
        time
    }
}

export const handlePushMessageChange = (message) => {
    return {
        type: 'HANDLE_PUSH_MESSAGE_CHANGE',
        message
    }
}

export function publish  (channel, message)  {
    return (dispatch, state) => {
        state().client.client.publish("/" + channel, message)
    }
}

export function getPlot () {
    return (dispatch, state) => {
        dispatch(setPlot(plotObject.plot))
        dispatch(setCurrentPlot(plotObject.plot[0], 1))
    }
}

export const setPlot = (plots) => {
    return {
        type: 'SET_PLOT',
        plots
    }
}

export const setCurrentPlot = (plot, index) => {
    return {
        type: 'SET_CURRENT_PLOT',
        plot,
        index
    }
}