// IMPORT: The keyword `require` import modules. Now, main.js has access to the methods greetingEnglish and greetingJapanese.
const greetings = require("./greeting.js");
const gesture = require("./gesture.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Halló"
greetings.greetingIcelandic();

// "Wave"
gesture.gestureEnglish();

// "Bow"
gesture.gestureJapanese();

// "Hand shake"
gesture.gestureSpanish();

// "Kiss on cheek"
gesture.gestureIcelandic();
