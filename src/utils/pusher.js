import Pusher from 'pusher-js';

const connection = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
  cluster: import.meta.env.VITE_PUSHER_CLUSTER,
});

export const connect = (channel, event, func) => {

  connection.subscribe(channel);
  connection.bind(event, response => func(response));
}

export const disconnect = (channel, event) => {
  connection.unbind(event)
  connection.unsubscribe(channel)
}
