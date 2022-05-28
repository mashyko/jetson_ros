var ros = new ROSLIB.Ros({ url : 'ws://' + location.hostname + ':9090' });
                                                   
ros.on('connection', function() {console.log('websocket: connected'); });
ros.on('error', function(error) {console.log('websocket error: ', error); });
ros.on('close', function() {console.log('websocket: closed');});

var ls = new ROSLIB.Topic({
        ros : ros,
        name : '/lightsensors',
        messageType : 'jnmouse_ros/LightSensorValues'
});

ls.subscribe(function(message) {
        for( e in message ){
                document.getElementById(e).innerHTML = message[e];
        }
});

document.getElementById('camstream').data='http://' + location.hostname + ':8080/stream?topic=/csi_cam_0/image_raw';

