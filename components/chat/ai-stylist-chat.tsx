"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { X, Send, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
}

const initialMessages: Message[] = [
  {
    id: "1",
    type: "ai",
    content:
      "Привет! Я ваш ИИ-стилист. Чем могу помочь сегодня? Могу предложить образы, помочь спланировать луки для мероприятий или дать советы по стилю!",
  },
]

const quickSuggestions = ["Что надеть сегодня?", "Образ для офиса", "Лук для свидания", "Кэжуал на выходные"]

interface AiStylistChatProps {
  onClose: () => void
}

export function AiStylistChat({ onClose }: AiStylistChatProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: String(Date.now()),
      type: "user",
      content: messageText,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: String(Date.now() + 1),
        type: "ai",
        content: getAIResponse(messageText),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const getAIResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase()
    if (lower.includes("сегодня") || lower.includes("надеть")) {
      return "Судя по погоде сегодня (+18°C, переменная облачность), я рекомендую бежевый блейзер с белой рубашкой и тёмно-синими чиносами. Универсально и для кэжуала, и для полуформального стиля!"
    }
    if (lower.includes("офис")) {
      return "Для офиса попробуйте серые шерстяные брюки с голубой оксфордской рубашкой. Добавьте коричневый кожаный ремень и подходящие туфли для элегантного образа."
    }
    if (lower.includes("свидан")) {
      return "Для свидания рекомендую чёрные зауженные джинсы с бордовым свитером. Стильно и расслабленно. Добавьте белые кроссовки для современного образа!"
    }
    if (lower.includes("выходн") || lower.includes("кэжуал")) {
      return "Для кэжуала на выходные выберите любимые джинсы, простую белую футболку и оливковую куртку. Удобно и эффектно!"
    }
    return "Отличный вопрос! Исходя из вашего гардероба, могу предложить несколько вариантов. Хотите, чтобы я сосредоточился на определённом стиле или поводе?"
  }

  return (
    <div className="fixed inset-0 z-50 bg-background max-w-md mx-auto flex flex-col">
      {/* Header - translated */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-primary/10">
            <AvatarFallback className="bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-foreground">ИИ-стилист</h2>
            <p className="text-xs text-muted-foreground">Всегда готов помочь</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Закрыть чат"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                message.type === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card border border-border/50 text-foreground rounded-bl-md"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick suggestions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-3">
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSend(suggestion)}
                className="px-3 py-2 rounded-full bg-card border border-border/50 text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input - translated */}
      <div className="px-4 py-3 border-t border-border/50 bg-card">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Спросите стилиста..."
            className="flex-1 px-4 py-3 rounded-xl bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button onClick={() => handleSend()} size="icon" className="w-12 h-12 rounded-xl" disabled={!input.trim()}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
