"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, X, Filter, Search } from "lucide-react"
import { ClothingCatalog } from "@/components/wardrobe/clothing-catalog"

interface WardrobeItem {
  id: string
  name: string
  image: string
  category: string
  color: string
  fabric: string
  size: string
}

const initialWardrobe: WardrobeItem[] = [
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
]

const categories = ["Все", "Верх", "Низ", "Верхняя одежда", "Обувь", "Аксессуары"]

export function WardrobeScreen() {
  const [items, setItems] = useState<WardrobeItem[]>(initialWardrobe)
  const [activeCategory, setActiveCategory] = useState("Все")
  const [showCatalog, setShowCatalog] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === "Все" || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddItem = (newItem: WardrobeItem) => {
    setItems([...items, { ...newItem, id: String(Date.now()) }])
    setShowCatalog(false)
  }

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  if (showCatalog) {
    return <ClothingCatalog onSelect={handleAddItem} onClose={() => setShowCatalog(false)} />
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Header - translated */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Мой гардероб</h1>
            <p className="text-sm text-muted-foreground mt-1">{items.length} вещей</p>
          </div>
          <Button onClick={() => setShowCatalog(true)} size="sm" className="gap-1.5 rounded-xl">
            <Plus className="w-4 h-4" />
            Добавить
          </Button>
        </div>

        {/* Search bar - translated */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск в гардеробе..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Wardrobe grid */}
      <div className="px-5 py-4">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Вещи не найдены</p>
            <Button onClick={() => setShowCatalog(true)} variant="link" className="mt-2">
              Добавить вещи в гардероб
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden border border-border/30 shadow-sm group"
              >
                {/* Image */}
                <div className="relative aspect-square bg-muted">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Удалить вещь"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-3">
                  <h3 className="font-medium text-sm text-foreground truncate">{item.name}</h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      {item.color}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      {item.size}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">{item.fabric}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
