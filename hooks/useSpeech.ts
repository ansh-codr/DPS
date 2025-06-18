"use client"

import { useCallback, useRef } from "react"

interface UseSpeechOptions {
  voice?: string
  rate?: number
  pitch?: number
  volume?: number
}

export function useSpeech(options: UseSpeechOptions = {}) {
  const { rate = 0.9, pitch = 1.1, volume = 0.8 } = options
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const speak = useCallback(
    (text: string) => {
      // Check if speech synthesis is supported
      if (!("speechSynthesis" in window)) {
        console.warn("Speech synthesis not supported")
        return
      }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      // Create new utterance
      utteranceRef.current = new SpeechSynthesisUtterance(text)

      // Configure voice settings for a pleasant female voice
      utteranceRef.current.rate = rate
      utteranceRef.current.pitch = pitch
      utteranceRef.current.volume = volume

      // Try to find a female voice
      const voices = window.speechSynthesis.getVoices()
      const femaleVoice = voices.find(
        (voice) =>
          voice.name.toLowerCase().includes("female") ||
          voice.name.toLowerCase().includes("woman") ||
          voice.name.toLowerCase().includes("samantha") ||
          voice.name.toLowerCase().includes("karen") ||
          voice.name.toLowerCase().includes("susan"),
      )

      if (femaleVoice) {
        utteranceRef.current.voice = femaleVoice
      }

      // Speak the text
      window.speechSynthesis.speak(utteranceRef.current)
    },
    [rate, pitch, volume],
  )

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
  }, [])

  return { speak, stop }
}
