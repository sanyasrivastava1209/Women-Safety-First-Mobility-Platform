// ----------- STATE GUARDS -----------
function require(key, redirect) {
    if (!localStorage.getItem(key)) {
        window.location.href = redirect;
    }
}

// ----------- RIDER FLOW -----------
function riderLogin() {
    localStorage.setItem("rider", "true");
    window.location.href = "booking.html";
}

function bookRide() {
    localStorage.setItem("ride", "true");
    window.location.href = "ride.html";
}

function triggerSOS() {
    window.location.href = "sos.html";
}

// ----------- DRIVER FLOW -----------
function driverLogin() {
    localStorage.setItem("driver", "true");
    window.location.href = "driver-register.html";
}

// ----------- TRAINING FLOW -----------
function trainingLogin() {
    localStorage.setItem("training", "true");
    window.location.href = "training.html";
}

// ----------- RESET -----------
function goHome() {
    localStorage.clear();
    window.location.href = "home.html";
}

// ----------- VOICE SOS -----------
function startVoiceSOS() {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const r = new SpeechRecognition();
    r.continuous = true;
    r.lang = "en-US";

    r.onresult = e => {
        const text =
            e.results[e.results.length - 1][0].transcript.toLowerCase();
        if (
            text.includes("help") ||
            text.includes("sos") ||
            text.includes("emergency")
        ) {
            r.stop();
            triggerSOS();
        }
    };
    r.start();
}
