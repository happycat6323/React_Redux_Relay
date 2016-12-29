import moment from 'moment'

export function subscribe  (channel)  {
    return (dispach,state) => {
        let subscribeObject = state().client.client.subscribe("/" + channel, (message) => {
            let time = moment().format('YYYY-MM-DD HH:mm:ss')
            console.log("[接收到推播訊息]" + time + " - " + message.message + " - "+ message.role)
            dispach(handlePushMessage(message, time))
        })
        dispach(setSubscribe(subscribeObject))
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

export function publish  (channel,message)  {
    return (dispach,state) => {
        state().client.client.publish("/" + channel, message)
    }
}