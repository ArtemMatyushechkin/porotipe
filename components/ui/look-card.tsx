"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface LookCardProps {
  id: string
  image: string
  tags: string[]
  liked: boolean
}

export function LookCard({ image, tags, liked: initialLiked }: LookCardProps) {
  const [liked, setLiked] = useState(initialLiked)

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/30">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-muted">
        <img src={image || "/placeholder.svg"} alt="Образ" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-accent text-accent-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions - translated */}
        <div className="flex items-center gap-2">
          <Button size="sm" variant="secondary" className="flex-1 rounded-xl text-xs h-9">
            Надеть
          </Button>
          <button
            onClick={() => setLiked(!liked)}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
              liked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground hover:text-primary"
            }`}
            aria-label={liked ? "Убрать из избранного" : "В избранное"}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  )
}
