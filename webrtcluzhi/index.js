document.write('success js');

function get(id) {
    return document.getElementById(id);
};
let show = get('MediaPlayer1');
document.write(show);
let show2 = document.getElementById('MediaPlayer1');
let rec = get('MediaPlayer2');
let lu = get('Button1');
let stop = get('Button2');
let start = get('Button3');
let download = get('Button4');

navigator.mediaDevices.getDisplayMedia({ audio: true, video: true }).then((stream) => {
    document.getElementById('MediaPlayer1').srcObject = stream;

})

navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
    document.getElementById('MediaPlayer2').srcObject = stream;

})