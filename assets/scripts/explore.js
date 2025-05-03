// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImg = document.querySelector('img');
  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  populateVoices(); 

  button.addEventListener('click', () => {
    const text = textArea.value;
    const voiceIndex = voiceSelect.value;

    if (!text || voiceIndex === 'select') {
      alert("Please enter some text and select a voice.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceIndex];

    utterance.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png'; // make sure this image exists
    });

    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });

}