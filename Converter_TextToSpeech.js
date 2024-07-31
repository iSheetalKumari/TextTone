let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // Clear existing options
    voiceSelect.innerHTML = '';

    voices.forEach((voice, i) => {
        // Create a new option element for each voice
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });

    // Set default voice
    speech.voice = voices[0];
};

// Update speech voice based on selected option
voiceSelect.addEventListener('change', () => {
    let selectedIndex = voiceSelect.selectedIndex;
    speech.voice = voices[selectedIndex];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
