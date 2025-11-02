import { useState, useEffect, useRef } from 'react';

const useVoiceRecognition = (onResult) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [browserSupportsSpeechRecognition, setBrowserSupports] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setBrowserSupports(true);
      recognitionRef.current = new SpeechRecognition();
      
      // Configure for better accuracy
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.maxAlternatives = 1;

      recognitionRef.current.onstart = () => {
        console.log('Voice recognition started');
        setIsListening(true);
      };

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        setTranscript(interimTranscript || finalTranscript);

        // If we have a final result, call the callback
        if (finalTranscript) {
          if (onResult) {
            onResult(finalTranscript);
          }
          setTranscript(''); // Clear transcript after sending
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setTranscript('');
        
        // Provide user-friendly error messages
        let errorMessage = 'Voice recognition error: ';
        switch (event.error) {
          case 'not-allowed':
          case 'permission-denied':
            errorMessage += 'Microphone permission denied. Please allow microphone access.';
            break;
          case 'network':
            errorMessage += 'Network error occurred. Please check your connection.';
            break;
          case 'audio-capture':
            errorMessage += 'No microphone detected. Please check your microphone.';
            break;
          default:
            errorMessage += 'Please try again.';
        }
        console.log(errorMessage);
      };

      recognitionRef.current.onend = () => {
        console.log('Voice recognition ended');
        setIsListening(false);
        setTranscript('');
      };

    } else {
      console.log('Speech recognition not supported in this browser');
      setBrowserSupports(false);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onResult]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
        setTranscript(''); // Clear previous transcript
      } catch (error) {
        console.error('Error starting voice recognition:', error);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.error('Error stopping voice recognition:', error);
      }
    }
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  };
};

export default useVoiceRecognition;