"use client"

import type { TabType } from "@/components/main-app"
import { Shirt, Sparkles, Plane, ShoppingBag } from "lucide-react"

interface BottomNavProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const tabs = [
  { id: "wardrobe" as const, label: "Гардероб", icon: Shirt },
  { id: "looks" as const, label: "Образы", icon: Sparkles },
  { id: "travel" as const, label: "Поездки", icon: Plane },
  { id: "store" as const, label: "Магазин", icon: ShoppingBag },
]

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-card border-t border-border/50 px-2 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : ""}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs ${isActive ? "font-semibold" : "font-medium"}`}>{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
