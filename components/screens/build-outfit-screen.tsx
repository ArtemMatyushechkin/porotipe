"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sun, Cloud, CloudRain, Sparkles, Check } from "lucide-react"

interface WardrobeItem {
  id: string
  name: string
  image: string
  category: string
  color: string
  fabric: string
  size: string
}

interface BuildOutfitScreenProps {
  onClose: () => void
  wardrobeItems: WardrobeItem[]
}

interface WeatherDay {
  day: string
  temp: number
  condition: "sunny" | "cloudy" | "rainy" | "snowy"
  icon: React.ReactNode
}

const weatherForecast: WeatherDay[] = [
  { day: "Сегодня", temp: 22, condition: "sunny", icon: <Sun className="w-6 h-6 text-amber-500" /> },
  { day: "Завтра", temp: 18, condition: "cloudy", icon: <Cloud className="w-6 h-6 text-gray-400" /> },
  { day: "Ср", temp: 15, condition: "rainy", icon: <CloudRain className="w-6 h-6 text-blue-400" /> },
  { day: "Чт", temp: 20, condition: "sunny", icon: <Sun className="w-6 h-6 text-amber-500" /> },
]

const getWeatherRecommendation = (temp: number, condition: string): string => {
  if (temp >= 25) {
    return "Жарко! Лёгкие ткани — хлопок или лён — помогут сохранить прохладу. Подойдут шорты, лёгкие платья или дышащие топы."
  } else if (temp >= 18) {
    return "Приятная погода. Лёгкий слой — кардиган или джинсовая куртка — будет в самый раз. Комбинируйте любимые вещи."
  } else if (temp >= 12) {
    return "Прохладно. Наденьте свитер или лёгкий блейзер. Закрытая обувь будет комфортнее."
  } else {
    return "Холодно! Тёплые ткани — шерсть — идеальны. Не забудьте уютную верхнюю одежду и тёплые аксессуары."
  }
}

const getConditionTip = (condition: string): string => {
  switch (condition) {
    case "rainy":
      return "Ожидается дождь — выбирайте водоотталкивающие ткани и возьмите зонт."
    case "snowy":
      return "Прогнозируется снег — выбирайте тёплые водонепроницаемые ботинки и утеплённые слои."
    case "cloudy":
      return "Облачно — универсальный образ для помещения и улицы будет идеальным."
    default:
      return "Ясное небо — отличный день, чтобы продемонстрировать любимые вещи!"
  }
}

export function BuildOutfitScreen({ onClose, wardrobeItems }: BuildOutfitScreenProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState("Все")

  const todayWeather = weatherForecast[0]
  const recommendation = getWeatherRecommendation(todayWeather.temp, todayWeather.condition)
  const conditionTip = getConditionTip(todayWeather.condition)

  const categories = ["Все", ...Array.from(new Set(wardrobeItems.map((item) => item.category)))]

  const filteredItems =
    activeCategory === "Все" ? wardrobeItems : wardrobeItems.filter((item) => item.category === activeCategory)

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const handleCreateLook = () => {
    onClose()
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header - translated */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm px-5 py-4 border-b border-border/30">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Собрать образ</h1>
            <p className="text-sm text-muted-foreground">Выберите вещи для вашего лука</p>
          </div>
        </div>
      </div>

      {/* Weather forecast - translated */}
      <div className="px-5 py-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-3">Прогноз погоды</h2>
        <div className="grid grid-cols-4 gap-2">
          {weatherForecast.map((day, index) => (
            <div
              key={day.day}
              className={`bg-card rounded-2xl p-3 text-center border ${
                index === 0 ? "border-primary/50 bg-primary/5" : "border-border/30"
              }`}
            >
              <p className="text-xs font-medium text-muted-foreground mb-1">{day.day}</p>
              <div className="flex justify-center mb-1">{day.icon}</div>
              <p className="text-lg font-semibold text-foreground">{day.temp}°C</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendation - translated */}
      <div className="px-5 pb-4">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Советы ИИ-стилиста</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{recommendation}</p>
              <p className="text-sm text-primary mt-2 font-medium">{conditionTip}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wardrobe items - translated */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-medium text-muted-foreground">Ваш гардероб</h2>
          <span className="text-xs text-primary font-medium">{selectedItems.length} выбрано</span>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-3 -mx-5 px-5 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Items grid - translated */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">В вашем гардеробе пока нет вещей.</p>
            <p className="text-sm text-muted-foreground mt-1">Сначала добавьте вещи во вкладке «Гардероб».</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {filteredItems.map((item) => {
              const isSelected = selectedItems.includes(item.id)
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`relative bg-card rounded-xl overflow-hidden border-2 transition-all ${
                    isSelected ? "border-primary shadow-md" : "border-transparent"
                  }`}
                >
                  <div className="aspect-square bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-xs font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.color}</p>
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Create look button - translated */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 px-5 max-w-md mx-auto">
          <Button onClick={handleCreateLook} className="w-full h-12 rounded-2xl text-base font-semibold shadow-lg">
            Создать образ из {selectedItems.length} вещей
          </Button>
        </div>
      )}
    </div>
  )
}
