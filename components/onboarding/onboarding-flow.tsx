"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shirt, Sparkles, ShoppingBag } from "lucide-react"

interface OnboardingFlowProps {
  onComplete: () => void
}

const slides = [
  {
    icon: Shirt,
    title: "Создайте свой гардероб",
    description: "Добавьте вашу одежду и позвольте ИИ организовать её в цифровой гардероб, доступный в любое время.",
  },
  {
    icon: Sparkles,
    title: "Получайте стильные советы",
    description: "Наш ИИ-стилист создаёт персональные образы с учётом погоды, повода и ваших предпочтений.",
  },
  {
    icon: ShoppingBag,
    title: "Покупайте готовые образы",
    description: "Открывайте подобранные луки от топовых брендов и покупайте полные комплекты в один клик.",
  },
]

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const slide = slides[currentSlide]
  const Icon = slide.icon
  const isLastSlide = currentSlide === slides.length - 1

  return (
    <div className="min-h-screen max-w-md mx-auto bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        {/* Icon */}
        <div className="w-32 h-32 rounded-full bg-card flex items-center justify-center mb-10 shadow-md border-2 border-primary/20">
          <Icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-foreground text-center mb-4 text-balance">{slide.title}</h1>

        {/* Description */}
        <p className="text-muted-foreground text-center leading-relaxed max-w-xs text-pretty">{slide.description}</p>
      </div>

      {/* Bottom section */}
      <div className="px-8 pb-12">
        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        {/* Button - translated */}
        <Button onClick={handleNext} className="w-full h-14 text-base font-medium rounded-2xl shadow-sm">
          {isLastSlide ? "Начать" : "Далее"}
        </Button>
      </div>
    </div>
  )
}
