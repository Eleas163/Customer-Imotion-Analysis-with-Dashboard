// js for sidebar dropdown
function uiShowHide() {
    var b = document.getElementById("uiDrpdwn");
    if (b.style.display === "block") {
        document.getElementById("arrRght").style = "transform: rotate(0deg)";
    } else {
        document.getElementById("arrRght").style = "transform: rotate(90deg)";
    }
}

$(document).ready(function () {
    $("#drpwndLi").click(function () {
        $("#uiDrpdwn").slideToggle("slow");
    });
});

//  toggle sidebar
function toggleHide() {
    var a = document.getElementById("sideMnu");
    if (a.style.width === "210px") {
        document.getElementById("sideMnu").style = "width: 0px;";
        document.getElementById("appcontnt").style = "margin-left: 0px;";
    } else {
        document.getElementById("sideMnu").style = "width: 210px;";
        document.getElementById("appcontnt").style = "margin-left: 0px;";
    }
}

// camera js
var video = document.getElementById('video');

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// emotion chart start
//   Chart.defaults.global.defaultFontColor = '#fff';
let d;
var ws = new WebSocket("ws://127.0.0.1:8080/");
// messages = document.createElement('ul');
message1 = document.getElementById('happy');
// message2 = document.getElementById('conf');

ws.onmessage = function (event) {
    d = event.data.split("-");
    emo = d[0];
    conf = d[1];
    labels = ["angry", "sad", "happy", "fear", 'surprise', 'neutral'];
    data = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < labels.length; i++) {
        if (labels[i] === emo) {
            labels[i] = emo;
            data[i] = parseInt(conf);

        }
    }
    console.log(labels, data);
    Chart.defaults.global.defaultFontColor = '#fff';
    new Chart(document.getElementById("emotion-chart"), {
        type: 'bar',
        data: {
            // "Angry", "Sad", "Happy", "Fear" [emo]
            labels: labels,
            datasets: [
                {
                    label: "Count",
                    backgroundColor: ["#11A667", "#11A667", "#11A667", "#11A667","#11A667","#11A667"],
                    // 5, 47, 30, 23
                    data: data,
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: ''
            },

        }

    });

//    line chart start
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: [2, 4, 5, 6, 10, 12, 14, 16, 18, 20],
            datasets: [{
                data: data,
                label: "one",
                borderColor: "#6EC38D",
                fill: false
            },
            ]
        },
        options: {
            title: {
                display: false
            }
        }
    });
}// emotion chart end
    // line chart start

    // line chart end
    // gender chart start
    new Chart(document.getElementById("gender-chart"), {
        type: 'bar',
        data: {
            labels: ["MALE", "FEMALE", "OTHERS"],
            datasets: [
                {
                    label: "Emotions",
                    backgroundColor: ["#6EC38D", "#6EC38D", "#6EC38D"],
                    data: [20, 50, 4]
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: ''
            }
        }
    });
    // gender chart end
    // age chart start
    new Chart(document.getElementById("age-chart"), {
        type: 'bar',
        data: {
            labels: ["0-15", "15-25", "25-35", "35-45", "45-55"],
            datasets: [
                {
                    label: "Emotions",
                    backgroundColor: ["#6EC38D", "#6EC38D", "#6EC38D", "#6EC38D", "#6EC38D"],
                    data: [15, 30, 10, 25, 35]
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: ''
            }
        }
    });
// age chart end