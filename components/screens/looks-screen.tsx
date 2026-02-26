"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LookCard } from "@/components/ui/look-card"
import { Plus, MessageCircle } from "lucide-react"
import { BuildOutfitScreen } from "./build-outfit-screen"

interface LooksScreenProps {
  onOpenChat: () => void
}

const wardrobeItems = [
  {
    id: "1",
    name: "Хлопковая рубашка",
    image: "/white-cotton-button-shirt.jpg",
    category: "Верх",
    color: "Белый",
    fabric: "Хлопок",
    size: "M",
  },
  {
    id: "2",
    name: "Джинсы",
    image: "/blue-denim-jeans.png",
    category: "Низ",
    color: "Синий",
    fabric: "Деним",
    size: "32",
  },
  {
    id: "3",
    name: "Кожаные лоферы",
    image: "/black-leather-loafers-shoes.jpg",
    category: "Обувь",
    color: "Чёрный",
    fabric: "Кожа",
    size: "42",
  },
  {
    id: "4",
    name: "Шерстяной блейзер",
    image: "/beige-wool-blazer-jacket.jpg",
    category: "Верхняя одежда",
    color: "Бежевый",
    fabric: "Шерсть",
    size: "M",
  },
  {
    id: "5",
    name: "Базовая футболка",
    image: "/basic-cotton-t-shirt.jpg",
    category: "Верх",
    color: "Серый",
    fabric: "Хлопок",
    size: "M",
  },
  {
    id: "6",
    name: "Вязаный свитер",
    image: "/cozy-knit-sweater-pullover.jpg",
    category: "Верх",
    color: "Кремовый",
    fabric: "Шерсть",
    size: "M",
  },
]

const looks = [
  {
    id: "1",
    image: "/casual-summer-outfit-with-white-shirt-and-beige-pa.jpg",
    tags: ["Кэжуал", "+22°C"],
    liked: true,
  },
  {
    id: "2",
    image: "/professional-office-outfit-with-blazer.jpg",
    tags: ["Офис", "+18°C"],
    liked: false,
  },
  {
    id: "3",
    image: "/evening-dinner-outfit-elegant-dress.jpg",
    tags: ["Вечерний", "+20°C"],
    liked: true,
  },
  {
    id: "4",
    image: "/weekend-brunch-outfit-jeans-and-sweater.jpg",
    tags: ["Выходные", "+15°C"],
    liked: false,
  },
]

export function LooksScreen({ onOpenChat }: LooksScreenProps) {
  const [showBuildOutfit, setShowBuildOutfit] = useState(false)

  if (showBuildOutfit) {
    return <BuildOutfitScreen onClose={() => setShowBuildOutfit(false)} wardrobeItems={wardrobeItems} />
  }

  return (
    <div className="min-h-screen">
      {/* Header - translated */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm px-5 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Ваши образы</h1>
          <Button onClick={() => setShowBuildOutfit(true)} size="sm" className="rounded-xl gap-1.5 shadow-sm">
            <Plus className="w-4 h-4" />
            Создать образ
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {looks.map((look) => (
            <LookCard key={look.id} {...look} />
          ))}
        </div>
      </div>

      {/* AI Chat FAB */}
      <button
        onClick={onOpenChat}
        className="fixed bottom-24 right-4 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Открыть чат с ИИ-стилистом"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}
