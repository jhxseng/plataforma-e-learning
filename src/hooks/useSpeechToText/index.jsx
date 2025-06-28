import React, {useRef, useState } from "react";

const useSpeechToText = (options) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [finalTranscript, setFinalTranscript] = useState("");
  const recognitionRef = useRef(null);
  const commandTimeout = useRef(null);

  React.useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error("Web Speech API no está disponible para su navegador.");
      return;
    }

    recognitionRef.current = new webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.interimResults = options.interimResults || true;
    recognition.lang = options.lang || "es-ES";
    recognition.continuous = options.continuous || false;

    if ("webkitSpeechGrammarList" in window) {
      const grammar =
        "JSGF V1.0; grammar punctuation; public <punc> = . | , | ¿ | ? | ! | ¡ | ; | : ;";
      const speechRecognitionList = new webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }

    recognition.onresult = (event) => {
      let text = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }

      setTranscript(text);

      if (commandTimeout.current) {
        clearTimeout(commandTimeout.current);
      }

      commandTimeout.current = setTimeout(() => {
        setFinalTranscript(text.trim());
      }, options.waitTime || 1000);
    };

    recognition.onerror = (event) => {
      console.error("Error de reconocimiento de voz:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
      setTranscript("");
    };

    return () => {
      recognition.stop();
      clearTimeout(commandTimeout.current)
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    }
    }

    const stopListening = () => {
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
        setIsListening(false);
      }
    };

    return {
      isListening,
      transcript,
      finalTranscript,
      startListening,
      stopListening,
    };
  };

export default useSpeechToText;
