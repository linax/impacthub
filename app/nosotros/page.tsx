import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Target, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NosotrosPage() {
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
              <Link href="/registro">
                <Button className="bg-primary hover:bg-primary/90">Únete a Nosotros</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Sobre <span className="text-secondary">ImpactHub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformamos el merchandising corporativo en oportunidades reales de inclusión y desarrollo para personas
              con síndrome de Down.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nuestra Misión</h2>
              <p className="text-lg text-muted-foreground">
                Creemos que cada persona merece la oportunidad de desarrollar su potencial y contribuir a la sociedad. A
                través de ImpactHub, conectamos el talento artístico de personas con síndrome de Down con empresas que
                buscan generar un impacto social real y medible.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1,200+</div>
                  <div className="text-sm text-muted-foreground">Artistas Beneficiados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Empresas Aliadas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/team-working.png"
                alt="Equipo trabajando"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en ImpactHub
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Inclusión</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creemos en el potencial de cada persona y trabajamos para crear oportunidades equitativas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Colaboración</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Construimos puentes entre empresas, artistas y comunidades para crear impacto conjunto.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Transparencia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Medimos y reportamos cada aspecto de nuestro impacto social de manera clara y verificable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Excelencia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nos comprometemos con la calidad en cada producto y servicio que ofrecemos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Quieres ser parte del cambio?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya están transformando su merchandising en impacto social real
          </p>
          <Link href="/registro">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
              Comenzar Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
