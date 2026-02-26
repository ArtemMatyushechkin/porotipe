"use client"

import { useState } from "react"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { LooksScreen } from "@/components/screens/looks-screen"
import { WardrobeScreen } from "@/components/screens/wardrobe-screen"
import { TravelScreen } from "@/components/screens/travel-screen"
import { StoreScreen } from "@/components/screens/store-screen"
import { AiStylistChat } from "@/components/chat/ai-stylist-chat"

export type TabType = "wardrobe" | "looks" | "travel" | "store"

export function MainApp() {
  const [activeTab, setActiveTab] = useState<TabType>("looks")
  const [showChat, setShowChat] = useState(false)

  const renderScreen = () => {
    switch (activeTab) {
      case "wardrobe":
        return <WardrobeScreen />
      case "looks":
        return <LooksScreen onOpenChat={() => setShowChat(true)} />
      case "travel":
        return <TravelScreen />
      case "store":
        return <StoreScreen />
      default:
        return <LooksScreen onOpenChat={() => setShowChat(true)} />
    }
  }

  return (
    <div className="relative min-h-screen max-w-md mx-auto bg-background overflow-hidden">
      <div className="pb-20">{renderScreen()}</div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {showChat && <AiStylistChat onClose={() => setShowChat(false)} />}
    </div>
  )
}
