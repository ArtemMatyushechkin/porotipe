"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plane, MapPin, Calendar, Sparkles, Sun, Cloud } from "lucide-react"

const trips = [
  {
    id: "1",
    destination: "Париж, Франция",
    dates: "15-22 декабря",
    weather: "+8°C",
    weatherIcon: Cloud,
    outfitsCount: 7,
    image: "/paris-eiffel-tower-cityscape.jpg",
  },
  {
    id: "2",
    destination: "Бали, Индонезия",
    dates: "5-15 января",
    weather: "+28°C",
    weatherIcon: Sun,
    outfitsCount: 10,
    image: "/bali-tropical-beach-resort.jpg",
  },
]

export function TravelScreen() {
  return (
    <div className="min-h-screen">
      {/* Header - translated */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Поездки</h1>
            <p className="text-sm text-muted-foreground mt-1">Планируйте образы для путешествий</p>
          </div>
          <Button size="sm" className="rounded-xl gap-1.5 shadow-sm">
            <Plane className="w-4 h-4" />
            Новая поездка
          </Button>
        </div>
      </div>

      {/* Trips list - translated */}
      <div className="px-5 space-y-4 pb-6">
        {trips.map((trip) => {
          const WeatherIcon = trip.weatherIcon
          return (
            <Card key={trip.id} className="overflow-hidden border-border/30 shadow-sm">
              {/* Trip image */}
              <div className="relative h-28 bg-muted">
                <img
                  src={trip.image || "/placeholder.svg"}
                  alt={trip.destination}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{trip.destination}</span>
                  </div>
                </div>
              </div>

              {/* Trip details */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {trip.dates}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <WeatherIcon className="w-4 h-4" />
                      {trip.weather}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{trip.outfitsCount} образов запланировано</span>
                  <Button size="sm" variant="secondary" className="rounded-xl gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Создать образы
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}

        {/* Empty state prompt - translated */}
        <Card className="p-6 border-dashed border-2 bg-card/50">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Plane className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Планируете поездку?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Добавьте направление и даты, и мы поможем собрать идеальный гардероб.
            </p>
            <Button variant="outline" className="rounded-xl bg-transparent">
              Добавить детали поездки
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
