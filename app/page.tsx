import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Target,
  BarChart3,
  Heart,
  Award,
  Building2,
  Palette,
  ShoppingBag,
  Coffee,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/impacthub-logo.png"
                alt="ImpactHub Corporate"
                width={200}
                height={60}
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/catalogo" className="text-muted-foreground hover:text-primary transition-colors">
                Productos
              </Link>
              <a href="#impacto" className="text-muted-foreground hover:text-primary transition-colors">
                Impacto
              </a>
              <Link href="/planes" className="text-muted-foreground hover:text-primary transition-colors">
                Planes
              </Link>
              <a href="#casos" className="text-muted-foreground hover:text-primary transition-colors">
                Casos de Éxito
              </a>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/registro">
                <Button className="bg-primary hover:bg-primary/90">Solicitar Demo</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                  Transforma. Conecta. Impacta.
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Merchandising Corporativo con <span className="text-corporate-blue">Impacto Social</span> Medible
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Convierte cada regalo corporativo en una historia de transformación social. Productos únicos creados
                  por artistas con síndrome de Down, con métricas de impacto en tiempo real para tu empresa.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/catalogo">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    Ver Catálogo de Productos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/registro">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8 bg-transparent"
                  >
                    Solicitar Demo del Dashboard
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Empresas Confiando</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-corporate-blue">1,200+</div>
                  <div className="text-sm text-muted-foreground">Artistas Beneficiados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">$2.5M+</div>
                  <div className="text-sm text-muted-foreground">Impacto Generado</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/art-workshop.png"
                  alt="Artistas con síndrome de Down creando arte"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Más que Merchandising, es <span className="text-corporate-blue">Transformación Social</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada producto que adquieres genera impacto medible en la vida de personas con síndrome de Down y sus
              familias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Impacto Medible</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Dashboard en tiempo real que muestra cuántos artistas han sido beneficiados, horas de capacitación
                  financiadas y familias impactadas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Arte Auténtico</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Productos únicos con diseños originales creados por artistas con síndrome de Down, cada uno con su
                  historia de superación.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Reportería ESG</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Certificaciones descargables para reportes corporativos y métricas ESG que fortalecen tu reputación
                  empresarial.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="productos" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Productos con <span className="text-energy-orange">Propósito</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Merchandising premium que cuenta historias de transformación y conecta emocionalmente con tus
              stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <Image
                  src="/colorful-art-tote.png"
                  alt="Bolsas Premium"
                  width={300}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-white">Bestseller</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-corporate-blue" />
                  Bolsas Premium
                </CardTitle>
                <CardDescription>
                  Bolsas de alta calidad con diseños únicos. Perfectas para eventos corporativos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <Image
                  src="/premium-water-bottle.png"
                  alt="Botellas Personalizadas"
                  width={300}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  Botellas Personalizadas
                </CardTitle>
                <CardDescription>
                  Botellas reutilizables con arte original. Sostenibilidad y propósito unidos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <Image
                  src="/art-notebook.png"
                  alt="Libretas de Arte"
                  width={300}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Libretas de Arte
                </CardTitle>
                <CardDescription>
                  Cuadernos premium con portadas artísticas. Ideales para regalos ejecutivos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder-sw6e4.png"
                  alt="Colección Completa"
                  width={300}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-corporate-blue" />
                  Colección Completa
                </CardTitle>
                <CardDescription>Sets personalizados para campañas corporativas de gran impacto.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/catalogo">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Ver Catálogo Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">¿Listo para Transformar tu Merchandising?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Únete a más de 500 empresas que ya están generando impacto social medible con sus regalos corporativos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registro">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
                  Solicitar Cotización
                  <Building2 className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/registro">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
                >
                  Agendar Demo del Dashboard
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/impacthub-logo.png"
                alt="ImpactHub Corporate"
                width={200}
                height={60}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-gray-400">Transformando el merchandising corporativo en impacto social medible.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/catalogo" className="hover:text-white transition-colors">
                    Bolsas Premium
                  </Link>
                </li>
                <li>
                  <Link href="/catalogo" className="hover:text-white transition-colors">
                    Botellas Personalizadas
                  </Link>
                </li>
                <li>
                  <Link href="/catalogo" className="hover:text-white transition-colors">
                    Libretas de Arte
                  </Link>
                </li>
                <li>
                  <Link href="/catalogo" className="hover:text-white transition-colors">
                    Catálogo Completo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/nosotros" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <a href="#impacto" className="hover:text-white transition-colors">
                    Impacto Social
                  </a>
                </li>
                <li>
                  <Link href="/casos-exito" className="hover:text-white transition-colors">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/registro" className="hover:text-white transition-colors">
                    Solicitar Demo
                  </Link>
                </li>
                <li>
                  <Link href="/soporte" className="hover:text-white transition-colors">
                    Soporte
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="hover:text-white transition-colors">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ImpactHub Corporate. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
