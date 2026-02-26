"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sun, Cloud, Snowflake, ShoppingCart, ChevronRight } from "lucide-react"

const featuredLooks = [
  {
    id: "1",
    name: "Летний кэжуал",
    brand: "Zara",
    price: "15 990 ₽",
    weather: "+25°C, солнечно",
    weatherIcon: Sun,
    image: "/summer-casual-outfit-white-linen-shirt-shorts-fash.jpg",
  },
  {
    id: "2",
    name: "Городской шик",
    brand: "H&M",
    price: "12 490 ₽",
    weather: "+18°C, облачно",
    weatherIcon: Cloud,
    image: "/urban-chic-outfit-blazer-jeans-fashion-model-city.jpg",
  },
  {
    id: "3",
    name: "Зимняя элегантность",
    brand: "COS",
    price: "27 990 ₽",
    weather: "-2°C, снег",
    weatherIcon: Snowflake,
    image: "/winter-elegant-outfit-coat-sweater-fashion-model.jpg",
  },
]

const categories = [
  { name: "Офис", count: 24 },
  { name: "Кэжуал", count: 56 },
  { name: "Вечерний", count: 18 },
  { name: "Спорт", count: 32 },
]

export function StoreScreen() {
  return (
    <div className="min-h-screen">
      {/* Header - translated */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm px-5 py-4">
        <h1 className="text-2xl font-semibold text-foreground">Магазин</h1>
        <p className="text-sm text-muted-foreground mt-1">Готовые образы от топовых брендов</p>
      </div>

      {/* Categories */}
      <div className="px-5 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={cat.name}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border/50 hover:border-primary/50"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Featured looks carousel - translated */}
      <div className="pb-4">
        <div className="flex items-center justify-between px-5 mb-3">
          <h2 className="font-semibold text-foreground">Избранные образы</h2>
          <button className="text-sm text-primary flex items-center gap-1">
            Все <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 px-5 snap-x snap-mandatory scrollbar-hide">
          {featuredLooks.map((look) => {
            const WeatherIcon = look.weatherIcon
            return (
              <Card key={look.id} className="flex-shrink-0 w-64 overflow-hidden border-border/30 shadow-sm snap-start">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-muted">
                  <img src={look.image || "/placeholder.svg"} alt={look.name} className="w-full h-full object-cover" />
                  {/* Weather badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1.5 text-xs font-medium">
                    <WeatherIcon className="w-3.5 h-3.5" />
                    {look.weather}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{look.name}</h3>
                      <p className="text-sm text-muted-foreground">{look.brand}</p>
                    </div>
                    <span className="font-semibold text-primary">{look.price}</span>
                  </div>

                  <Button className="w-full rounded-xl gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Купить комплект
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Vertical feed - translated */}
      <div className="px-5 pb-6">
        <h2 className="font-semibold text-foreground mb-3">Сейчас в тренде</h2>
        <div className="space-y-3">
          {featuredLooks.map((look) => {
            const WeatherIcon = look.weatherIcon
            return (
              <Card key={`trending-${look.id}`} className="flex overflow-hidden border-border/30 shadow-sm">
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 bg-muted">
                  <img src={look.image || "/placeholder.svg"} alt={look.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{look.name}</h3>
                    <p className="text-xs text-muted-foreground">{look.brand}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <WeatherIcon className="w-3 h-3" />
                      {look.weather}
                    </div>
                    <span className="text-sm font-semibold text-primary">{look.price}</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
