var i=0;
function timeCount() {
    i++;
    postMessage(i);
    setTimeout("timedCount()",500);
}