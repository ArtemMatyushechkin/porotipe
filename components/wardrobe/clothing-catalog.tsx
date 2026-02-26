"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, ChevronRight } from "lucide-react"

interface CatalogItem {
  id: string
  name: string
  image: string
  category: string
  colors: string[]
  fabrics: string[]
  sizes: string[]
}

const catalogItems: CatalogItem[] = [
  {
    id: "c1",
    name: "Классическая футболка",
    image: "/basic-cotton-t-shirt.jpg",
    category: "Верх",
    colors: ["Белый", "Чёрный", "Тёмно-синий", "Серый", "Бежевый"],
    fabrics: ["Хлопок", "Лён", "Трикотаж"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c2",
    name: "Рубашка на пуговицах",
    image: "/elegant-button-down-dress-shirt.jpg",
    category: "Верх",
    colors: ["Белый", "Голубой", "Розовый", "В полоску"],
    fabrics: ["Хлопок", "Оксфорд", "Поплин"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c3",
    name: "Вязаный свитер",
    image: "/cozy-knit-sweater-pullover.jpg",
    category: "Верх",
    colors: ["Кремовый", "Тёмно-синий", "Бордовый", "Зелёный"],
    fabrics: ["Шерсть", "Кашемир", "Меринос"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c4",
    name: "Зауженные джинсы",
    image: "/slim-fit-blue-jeans.png",
    category: "Низ",
    colors: ["Светло-синий", "Тёмно-синий", "Чёрный", "Серый"],
    fabrics: ["Деним", "Стрейч-деним"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "c5",
    name: "Брюки чинос",
    image: "/classic-chino-pants-trousers.jpg",
    category: "Низ",
    colors: ["Хаки", "Тёмно-синий", "Оливковый", "Чёрный"],
    fabrics: ["Хлопковый твил", "Стрейч-хлопок"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "c6",
    name: "Классические брюки",
    image: "/tailored-dress-trousers.jpg",
    category: "Низ",
    colors: ["Угольный", "Тёмно-синий", "Чёрный", "Песочный"],
    fabrics: ["Шерсть", "Шерстяная смесь", "Полиэстер"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "c7",
    name: "Блейзер",
    image: "/modern-fit-blazer-jacket.jpg",
    category: "Верхняя одежда",
    colors: ["Тёмно-синий", "Угольный", "Кэмел", "Чёрный"],
    fabrics: ["Шерсть", "Лён", "Хлопок"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c8",
    name: "Кожаная куртка",
    image: "/classic-leather-biker-jacket.jpg",
    category: "Верхняя одежда",
    colors: ["Чёрный", "Коричневый", "Рыжий"],
    fabrics: ["Натуральная кожа", "Эко-кожа"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c9",
    name: "Тренч",
    image: "/elegant-trench-coat.jpg",
    category: "Верхняя одежда",
    colors: ["Бежевый", "Чёрный", "Тёмно-синий"],
    fabrics: ["Хлопковый габардин", "Водоотталкивающий"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "c10",
    name: "Кожаные лоферы",
    image: "/classic-leather-loafers-shoes.jpg",
    category: "Обувь",
    colors: ["Чёрный", "Коричневый", "Бордовый", "Рыжий"],
    fabrics: ["Кожа", "Замша"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "c11",
    name: "Белые кроссовки",
    image: "/minimalist-white-sneakers.jpg",
    category: "Обувь",
    colors: ["Белый", "Молочный", "Бело-синий"],
    fabrics: ["Кожа", "Канвас", "Сетка"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "c12",
    name: "Ботинки челси",
    image: "/classic-chelsea-boots.jpg",
    category: "Обувь",
    colors: ["Чёрный", "Коричневый", "Рыжий"],
    fabrics: ["Кожа", "Замша"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "c13",
    name: "Кожаный ремень",
    image: "/classic-leather-belt.jpg",
    category: "Аксессуары",
    colors: ["Чёрный", "Коричневый", "Рыжий"],
    fabrics: ["Кожа", "Натуральная кожа"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "c14",
    name: "Шёлковый шарф",
    image: "/silk-scarf-accessory.jpg",
    category: "Аксессуары",
    colors: ["Тёмно-синий", "Бордовый", "С узором", "Однотонный"],
    fabrics: ["Шёлк", "Шёлковая смесь"],
    sizes: ["Универсальный"],
  },
  {
    id: "c15",
    name: "Часы",
    image: "/classic-wristwatch-accessory.jpg",
    category: "Аксессуары",
    colors: ["Серебро", "Золото", "Розовое золото", "Чёрный"],
    fabrics: ["Нержавеющая сталь", "Кожаный ремешок"],
    sizes: ["Универсальный"],
  },
]

const categories = ["Все", "Верх", "Низ", "Верхняя одежда", "Обувь", "Аксессуары"]

interface ClothingCatalogProps {
  onSelect: (item: {
    name: string
    image: string
    category: string
    color: string
    fabric: string
    size: string
  }) => void
  onClose: () => void
}

export function ClothingCatalog({ onSelect, onClose }: ClothingCatalogProps) {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedFabric, setSelectedFabric] = useState("")
  const [selectedSize, setSelectedSize] = useState("")

  const filteredItems = catalogItems.filter((item) => activeCategory === "Все" || item.category === activeCategory)

  const handleSelectItem = (item: CatalogItem) => {
    setSelectedItem(item)
    setSelectedColor(item.colors[0])
    setSelectedFabric(item.fabrics[0])
    setSelectedSize(item.sizes[Math.floor(item.sizes.length / 2)])
  }

  const handleConfirm = () => {
    if (selectedItem && selectedColor && selectedFabric && selectedSize) {
      onSelect({
        name: selectedItem.name,
        image: selectedItem.image,
        category: selectedItem.category,
        color: selectedColor,
        fabric: selectedFabric,
        size: selectedSize,
      })
    }
  }

  // Selection screen for color, fabric, size - translated
  if (selectedItem) {
    return (
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm px-5 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedItem(null)}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-foreground">Настроить вещь</h1>
          </div>
        </div>

        {/* Item preview */}
        <div className="px-5 py-6">
          <div className="bg-card rounded-2xl border border-border/30 overflow-hidden">
            <div className="aspect-square bg-muted">
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-foreground">{selectedItem.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{selectedItem.category}</p>
            </div>
          </div>
        </div>

        {/* Options - translated */}
        <div className="px-5 space-y-6">
          {/* Color selection */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Цвет</h3>
            <div className="flex flex-wrap gap-2">
              {selectedItem.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedColor === color
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Fabric selection */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Ткань</h3>
            <div className="flex flex-wrap gap-2">
              {selectedItem.fabrics.map((fabric) => (
                <button
                  key={fabric}
                  onClick={() => setSelectedFabric(fabric)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedFabric === fabric
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {fabric}
                </button>
              ))}
            </div>
          </div>

          {/* Size selection */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Размер</h3>
            <div className="flex flex-wrap gap-2">
              {selectedItem.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-xl text-sm font-medium transition-all flex items-center justify-center ${
                    selectedSize === size
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Confirm button - translated */}
        <div className="fixed bottom-0 left-0 right-0 p-5 bg-background/80 backdrop-blur-sm border-t border-border">
          <div className="max-w-md mx-auto">
            <Button
              onClick={handleConfirm}
              disabled={!selectedColor || !selectedFabric || !selectedSize}
              className="w-full h-14 rounded-2xl text-base font-medium gap-2"
            >
              <Check className="w-5 h-5" />
              Добавить в гардероб
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Catalog browsing screen - translated
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm px-5 py-4 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Каталог одежды</h1>
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

      {/* Catalog grid */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-2 gap-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className="bg-card rounded-2xl overflow-hidden border border-border/30 shadow-sm text-left hover:border-primary/50 transition-colors group"
            >
              <div className="aspect-square bg-muted relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm text-foreground">{item.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.colors.length} цветов • {item.sizes.length} размеров
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
