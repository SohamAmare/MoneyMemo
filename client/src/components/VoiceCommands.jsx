import React, { useState, useEffect, useRef } from "react";

const VoiceCommands = () => {
  const [isListening, setListening] = useState(false); // control the mic
  const [transcript, setTranscript] = useState(""); // store voice input
  const recognitionRef = useRef(null); // useRef to persist recognition instance

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support the Speech API. Please try Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true; // Keep continuous listening
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("Speech recognition started");
      setListening(true);
    };

    recognition.onend = () => {
      console.log("Speech recognition stopped");
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
    };

    recognition.onresult = (event) => {
      const spokenWords = event.results[event.results.length - 1][0].transcript;
      console.log("Voice command received: ", spokenWords);
      setTranscript(spokenWords); // Update transcript with the most recent words
      handleCommand(spokenWords); // Process the command
    };

    recognitionRef.current = recognition; // Assign to ref to persist recognition instance

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop(); // Ensure cleanup on component unmount
      }
    };
  }, []);

  // Command handler logic
  const handleCommand = (command) => {
    if (command.toLowerCase().includes("add expense")) {
      alert("You said: Add Expense");
    } else if (command.toLowerCase().includes("show budget")) {
      alert("You said: Show Budget");
    } else if (command.toLowerCase().includes("send reminder")) {
      alert("You said: Send Reminder");
    } else {
      alert(`Unrecognized command: "${command}"`);
    }
  };

  // Start listening
  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  // Stop listening
  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setTranscript(""); // Clear the transcript when stopping
    }
  };

  return (
    <div>
      <h2>Voice Activated Commands</h2>
      <button onClick={startListening}>
        {isListening ? "Listening..." : "Start Voice Command"}
      </button>
      <button onClick={stopListening}>Stop Listening</button>
      <p>Command: {transcript}</p>
    </div>
  );
};

export default VoiceCommands;

// import React, { useState, useEffect } from "react";

// const VoiceCommands = () => {
//   const [isListening, setListening] = useState(false); // this is to control the mic
//   const [transcript, setTranscript] = useState(""); // this is to store voice input
//   let recognition; // Declare recognition outside of useEffect

//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Your browser does not support the Speech API. Please try Chrome.");
//       return;
//     }

//     recognition = new SpeechRecognition();
//     recognition.continuous = true;
//     recognition.interimResults = false;

//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => {
//       setListening(false);
//       recognition.start();
//     };
//     recognition.onerror = (event) =>
//       console.error("Speech Recognition Error:", event.error);

//     recognition.onresult = (event) => {
//       const spokenWords = event.results[0][0].transcript;
//       console.log("Voice command received: ", spokenWords);
//       setTranscript(spokenWords);
//       handleCommand(spokenWords);
//     };

//     recognition.start();

//     return () => {
//       if (recognition) {
//         recognition.stop(); // Clean up
//       }
//     };
//   }, []);

//   // Command handler logic moved outside the useEffect
//   const handleCommand = (command) => {
//     if (command.toLowerCase().includes("add expense")) {
//       alert("You said: Add Expense");
//     } else if (command.toLowerCase().includes("show budget")) {
//       alert("You said: Show Budget");
//     } else if (command.toLowerCase().includes("send reminder")) {
//       alert("You said: Send Reminder");
//     } else {
//       alert(`Unrecognized command: "${command}"`);
//     }
//   };

//   // Move startListening function outside useEffect
//   const startListening = () => {
//     if (recognition) {
//       recognition.start();
//     }
//   };

//   const stopListening = () => {
//     if (recognition && isListening) {
//       recognition.stop();
//     }
//   };

//   return (
//     <div>
//       <h2>Voice Activated Commands</h2>
//       <button onClick={startListening}>
//         {isListening ? "Listening..." : "Start Voice Command"}
//       </button>
//       <button onClick={stopListening}>Stop Listening</button>
//       <p>Command: {transcript}</p>
//     </div>
//   );
// };

// export default VoiceCommands;

// // import React, { useState, useEffect } from "react";
// // import SpeechRecognition from "react-speech-recognition";

// // const VoiceCommands = () => {
// //   const [isListening, setListening] = useState(false); // this is to control the mic
// //   const [transcript, setTranscript] = useState(""); // this is to store voice input

// //   useEffect(() => {
// //     const SpeechRecognition =
// //       window.SpeechRecognition || window.webkitSpeechRecognition;

// //     if (!SpeechRecognition) {
// //       alert("Your browser does not support the Speech API. Please try Chrome.");
// //       return;
// //     }

// //     const recognition = new SpeechRecognition();
// //     recognition.continuous = false;
// //     recognition.interimResults = false;

// //     recognition.onstart = () => setListening(true);
// //     recognition.onend = () => setListening(false);
// //     recognition.onerror = (event) => console.error(event.error);

// //     recognition.onresult = (event) => {
// //       const spokenWords = event.results[0][0].transcript;
// //       console.log("Voice command recieved: ", spokenWords);
// //       setTranscript(spokenWords);

// //       handleCommand(spokenWords);
// //     };

// //     const handleCommand = (command) => {
// //       if (command.toLowerCase().includes("add expense")) {
// //         alert("You said: Add Expense");
// //       } else if (command.toLowerCase().includes("show budget")) {
// //         alert("You said: Show Budget");
// //       } else if (command.toLowerCase().includes("send reminder")) {
// //         alert("You said: Send Reminder");
// //       } else {
// //         alert(`Unrecognized command:"${command}"`);
// //       }
// //     };

// //     const startListening = () => recognition.start();

// //     return () => recognition.stop();
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Voice Activated Commands</h2>
// //       <button onClick={() => startListening()}>
// //         {isListening ? "Listening..." : "Start Voice Command"}
// //       </button>
// //       <p>Command: {transcript}</p>
// //     </div>
// //   );
// // };

// // export default VoiceCommands;
