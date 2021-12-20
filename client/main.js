const app = new Vue({
    el: '#app',
    data: {
        isAlive: false,
        socket: null,
        messages: [],
        message: ""
    },
    methods: {
        sendMessage(){
            this.socket?.send(this.message)
            this.messages.unshift(this.message)
            this.message = ''
        }
    },
    mounted() {
        this.socket = new WebSocket('ws://localhost:8080');
        this.socket.onopen = (e) => {
            this.isAlive = true;
        }
        this.socket.onmessage = (e) => {
            this.messages.unshift(e.data)
        };
    },
});