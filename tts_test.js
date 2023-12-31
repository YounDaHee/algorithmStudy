const fs = require('fs');

// Imports the Google Cloud client library
const textToSpeech = require('https://texttospeech.googleapis.com/v1beta1/text:synthesize');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

// The text to synthesize
const text = '안녕하세요';

// Construct the request
const request = {
  input: {text: text},
  // Select the language and SSML Voice Gender (optional)
  voice: {languageCode: 'ko_KR', ssmlGender: 'FEMALE', name: 'ko-KR-Wavenet-A'},
  // Select the type of audio encoding
  audioConfig: {audioEncoding: 'MP3'},
};

// Performs the Text-to-Speech request
client.synthesizeSpeech(request, (err, response) => {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  var ts_hms = Date.now().toString();
  fs.writeFile('./out/' + ts_hms+ '.mp3', response.audioContent, 'binary', err => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }
    console.log(text);
  });
})