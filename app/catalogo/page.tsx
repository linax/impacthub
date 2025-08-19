"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ArrowLeft,
  Search,
  Filter,
  Heart,
  Users,
  Award,
  ShoppingBag,
  Coffee,
  BookOpen,
  Palette,
  Star,
  Eye,
  Gift,
  Brush,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Bolsa Tote 'Conexiones' - Fundación Complementa",
    category: "bolsas",
    price: "Desde $15.000",
    image: "/bolsa-complementa.png",
    artist: "María González",
    artistImage: "/artist-maria.png",
    description: "Bolsa de lona premium con diseño original que representa las conexiones humanas.",
    impact: "Cada compra financia 2 horas de capacitación laboral",
    features: ["100% algodón orgánico", "Asas reforzadas", "Personalización disponible"],
    bestseller: true,
    sustainability: "Materiales sostenibles",
  },
  {
    id: 2,
    name: "Botella Térmica 'Rosa' - Centro UC SD Down",
    category: "botellas",
    price: "Desde $25.000",
    image: "/botella-complementa.png",
    artist: "Carlos Mendoza",
    artistImage: "/artist-carlos.png",
    description: "Botella térmica de acero inoxidable con arte inspirado en la naturaleza.",
    impact: "Cada compra apoya el empleo de 1 artista por 1 día",
    features: ["Acero inoxidable 316", "Mantiene temperatura 12h", "Libre de BPA"],
    sustainability: "Reutilizable y eco-friendly",
  },
  {
    id: 3,
    name: "Libreta 'Sueños'- Fundación Complementa",
    category: "libretas",
    price: "Desde $12.000",
    image: "/libreta-pavo.png",
    artist: "Ana Rodríguez",
    artistImage: "/artist-ana.png",
    description: "Cuaderno de tapa dura con diseños que representan sueños y aspiraciones.",
    impact: "Cada compra contribuye a 1 sesión de terapia ocupacional",
    features: ["Papel reciclado", "Tapa dura resistente", "Marcador de páginas incluido"],
    sustainability: "Papel 100% reciclado",
  },
  {
    id: 4,
    name: "Set Ejecutivo 'Inspiración' - Centro UC Down",
    category: "sets",
    price: "Desde $45.000",
    image: "/libreta-premium.png",
    artist: "Diego Herrera",
    artistImage: "/artist-diego.png",
    description: "Set completo con libreta, bolígrafo y tarjetero con diseños motivacionales.",
    impact: "Cada set financia 1 semana de capacitación completa",
    features: ["Estuche premium", "Grabado personalizado", "Certificado de impacto"],
    bestseller: true,
    sustainability: "Packaging biodegradable",
  },
  {
    id: 5,
    name: "Taza Cerámica 'Colores' - Centro UC SD Down",
    category: "tazas",
    price: "Desde $10.000",
    image: "/taza-uc.png",
    artist: "Sofía Vargas",
    artistImage: "/artist-sofia.png",
    description: "Taza de cerámica artesanal con vibrantes diseños abstractos.",
    impact: "Cada compra apoya materiales de arte por 1 mes",
    features: ["Cerámica de alta calidad", "Apta para microondas", "Diseño único"],
    sustainability: "Cerámica local",
  },
  {
    id: 6,
    name: "Mousepad 'Geometría' - Fundación Complementa",
    category: "oficina",
    price: "Desde $8.000",
    image: "/mousepad-pavo.png",
    artist: "Roberto Silva",
    artistImage: "/artist-roberto.png",
    description: "Mousepad ergonómico con patrones geométricos coloridos.",
    impact: "Cada compra financia herramientas de trabajo adaptadas",
    features: ["Base antideslizante", "Superficie suave", "Fácil limpieza"],
    sustainability: "Materiales reciclados",
  },
  {
    id: 7,
    name: "Pintura Original 'Esperanza' - María González",
    category: "arte",
    price: "$150.000",
    image: "/pintura1-complementa.png",
    artist: "María González",
    artistImage: "/artist-maria.png",
    description: "Obra original en acrílico sobre lienzo que representa la esperanza y los sueños.",
    impact: "100% del valor apoya directamente al artista y su familia",
    features: ["Acrílico sobre lienzo", "40x50 cm", "Certificado de autenticidad", "Marco incluido"],
    bestseller: false,
    sustainability: "Arte original único",
  },
  {
    id: 8,
    name: "Cerámicas 'Conexión' - Carlos Mendoza",
    category: "arte",
    price: "$15.000",
    image: "/ceramicas-complementa.png",
    artist: "Carlos Mendoza",
    artistImage: "/artist-carlos.png",
    description: "Cerámica en Gress.",
    impact: "Financia de materiales de arte para el taller",
    features: ["Arcilla cocida", "25x15x20 cm", "Pieza única", "Base de madera incluida"],
    bestseller: false,
    sustainability: "Materiales naturales",
  },
  {
    id: 9,
    name: "Pintura 'Diversidad' - Ana Rodríguez",
    category: "arte",
    price: "$80.000",
    image: "/cuadro2-cuc.png",
    artist: "Ana Rodríguez",
    artistImage: "/artist-ana.png",
    description: "Impresión de alta calidad de collage digital que celebra la diversidad.",
    impact: "Apoya el programa de arte digital inclusivo",
    features: ["Impresión giclée", "30x40 cm", "Papel de museo", "Edición limitada de 50"],
    bestseller: false,
    sustainability: "Tintas ecológicas",
  },
  {
    id: 10,
    name: "Cupo Anual - Programa de Capacitación Laboral",
    category: "donacion",
    price: "$500.000",
    image: "/anual-cuc.png",
    artist: "Fundación Complementa",
    artistImage: "/fundacion-logo.png",
    description: "Financia un cupo completo en el programa de capacitación laboral por un año.",
    impact: "1 persona con síndrome de Down recibe capacitación laboral completa",
    features: [
      "Capacitación por 12 meses",
      "Certificación laboral",
      "Seguimiento personalizado",
      "Reportes de progreso",
    ],
    bestseller: true,
    sustainability: "Impacto social directo",
  },
  {
    id: 11,
    name: "Cupo Mensual - Programa de Vida Independiente",
    category: "donacion",
    price: "$100.000",
    image: "/mensual-complementa.png",
    artist: "Fundación Complementa",
    artistImage: "/fundacion-logo.png",
    description: "Apoya el desarrollo de habilidades para la vida independiente durante un mes.",
    impact: "1 persona desarrolla habilidades de autonomía personal",
    features: [
      "Entrenamiento en habilidades diarias",
      "Apoyo psicológico",
      "Actividades grupales",
      "Evaluación mensual",
    ],
    bestseller: false,
    sustainability: "Autonomía personal",
  },
]

const categories = [
  { value: "todas", label: "Todas las categorías", icon: Palette },
  { value: "bolsas", label: "Bolsas", icon: ShoppingBag },
  { value: "botellas", label: "Botellas", icon: Coffee },
  { value: "libretas", label: "Libretas", icon: BookOpen },
  { value: "sets", label: "Sets Ejecutivos", icon: Award },
  { value: "tazas", label: "Tazas", icon: Coffee },
  { value: "oficina", label: "Oficina", icon: Users },
  { value: "arte", label: "Obras de Arte", icon: Brush },
  { value: "donacion", label: "Donación de Cupos", icon: Gift },
]

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState("todas")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("relevancia")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "todas" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artist.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
                <span>Volver al inicio</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                Solicitar Cotización
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Contactar Asesor</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Catálogo de <span className="text-secondary">Productos con Propósito</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada producto cuenta una historia única de transformación social. Descubre merchandising premium creado
              por artistas con síndrome de Down.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Productos Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">25+</div>
                <div className="text-sm text-muted-foreground">Artistas Colaboradores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Impacto Medible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos o artistas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 mr-2" />
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{filteredProducts.length} productos encontrados</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevancia">Relevancia</SelectItem>
                  <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="artista">Por Artista</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.bestseller && (
                      <Badge className="bg-secondary text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Bestseller
                      </Badge>
                    )}
                    <Badge variant="outline" className="bg-white/90 text-primary border-primary">
                      {product.sustainability}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{product.name}</DialogTitle>
                          <DialogDescription>Creado por {product.artist}</DialogDescription>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={300}
                              height={300}
                              className="rounded-lg object-cover w-full"
                            />
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Descripción</h4>
                              <p className="text-muted-foreground">{product.description}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Impacto Social</h4>
                              <p className="text-secondary font-medium">{product.impact}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Características</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {product.features.map((feature, index) => (
                                  <li key={index}>• {feature}</li>
                                ))}
                              </ul>
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/90">Solicitar Cotización</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={product.artistImage || "/placeholder.svg"}
                        alt={product.artist}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">Artista: {product.artist}</p>
                        <p className="text-xs text-muted-foreground">Ver más obras</p>
                      </div>
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Heart className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-accent">Impacto Social</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{product.impact}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">Cotizar</Button>
                      <Button
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">¿No encuentras lo que buscas?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestro equipo puede crear productos personalizados que se adapten perfectamente a las necesidades de tu
              empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Solicitar Producto Personalizado
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8 bg-transparent"
              >
                Hablar con un Asesor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
