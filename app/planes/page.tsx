"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Check,
  Star,
  Building2,
  Users,
  Calendar,
  BarChart3,
  Zap,
  Headphones,
  TrendingUp,
  Award,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const plans = {
  growth: {
    name: "ImpactHub Growth",
    subtitle: "Para PYMES conscientes socialmente",
    price: "$50,000",
    period: "/mes",
    description: "Perfecto para empresas en crecimiento que quieren generar impacto social medible",
    features: [
      "Dashboard básico de impacto social",
      "Reportes trimestrales automatizados",
      "Hasta 5,000 productos por año",
      "Catálogo completo de productos",
      "Certificaciones ESG básicas",
      "Soporte por email",
      "Historias de impacto personalizadas",
      "Acceso a eventos virtuales",
    ],
    limitations: ["Reportes limitados a trimestral", "Sin account manager dedicado", "Personalización limitada"],
    ideal: ["50-200 empleados", "Presupuesto RSE inicial", "Eventos trimestrales"],
    color: "secondary",
  },
  corporate: {
    name: "ImpactHub Corporate",
    subtitle: "Para grandes corporaciones",
    price: "$200,000",
    period: "/mes",
    description: "La solución completa para empresas que buscan liderazgo en impacto social",
    features: [
      "Dashboard avanzado con IA predictiva",
      "Reportes en tiempo real 24/7",
      "Productos ilimitados",
      "Account manager dedicado",
      "Co-creación de campañas especiales",
      "Certificaciones ESG premium",
      "Integración con herramientas corporativas",
      "Eventos exclusivos con artistas",
      "Benchmarking de industria",
      "Consultoría en RSE incluida",
      "API básica para integraciones",
      "Soporte prioritario 24/7",
    ],
    popular: true,
    ideal: ["200+ empleados", "Múltiples ubicaciones", "Reportes ESG anuales"],
    color: "primary",
  },
  enterprise: {
    name: "ImpactHub Enterprise",
    subtitle: "Para líderes en transformación social",
    price: "$500,000",
    period: "/mes",
    description: "Solución enterprise para corporaciones que definen estándares de impacto social",
    features: [
      "Todo lo incluido en Corporate",
      "Integración completa con SAP/ERP",
      "API completa para desarrollos propios",
      "Consultoría estratégica en RSE",
      "Dashboard white-label personalizado",
      "Métricas personalizadas avanzadas",
      "Acceso a red global de artistas",
      "Eventos corporativos exclusivos",
      "Certificaciones internacionales",
      "Soporte técnico dedicado",
      "SLA garantizado 99.9%",
      "Capacitación para equipos internos",
    ],
    ideal: ["1000+ empleados", "Operaciones globales", "Liderazgo en sostenibilidad"],
    color: "accent",
  },
}

const segments = [
  {
    id: "corporaciones",
    name: "Grandes Corporaciones",
    icon: Building2,
    description: "200+ empleados, múltiples ubicaciones",
    recommendedPlan: "corporate",
    benefits: [
      "Diferenciación competitiva real",
      "Cumplimiento de métricas ESG",
      "Engagement de empleados mejorado",
      "Reputación corporativa fortalecida",
    ],
  },
  {
    id: "pymes",
    name: "PYMES Conscientes",
    icon: Users,
    description: "50-200 empleados, crecimiento sostenible",
    recommendedPlan: "growth",
    benefits: [
      "Acceso a impacto social medible",
      "Diferenciación en el mercado",
      "Atracción de talento comprometido",
      "Construcción de marca con propósito",
    ],
  },
  {
    id: "eventos",
    name: "Organizadores de Eventos",
    icon: Calendar,
    description: "Eventos corporativos y conferencias",
    recommendedPlan: "corporate",
    benefits: [
      "Regalos que generan conversación",
      "Experiencias memorables",
      "Contenido para redes sociales",
      "Conexión emocional con asistentes",
    ],
  },
]

export default function PlanesPage() {
  const [selectedSegment, setSelectedSegment] = useState("corporaciones")
  const [billingCycle, setBillingCycle] = useState("monthly")

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
                Hablar con Ventas
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Solicitar Demo</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Planes que <span className="text-secondary">Transforman</span> tu Impacto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde PYMES hasta grandes corporaciones, tenemos la solución perfecta para convertir tu merchandising en
              impacto social medible y diferenciación competitiva real.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Empresas Activas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">$2.5M+</div>
                <div className="text-sm text-muted-foreground">Impacto Generado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Selector */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">¿Cuál describe mejor tu empresa?</h2>
            <p className="text-muted-foreground">Selecciona tu perfil para ver recomendaciones personalizadas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((segment) => (
              <Card
                key={segment.id}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  selectedSegment === segment.id
                    ? "border-primary shadow-lg scale-105"
                    : "border-border hover:border-primary/50 hover:shadow-md"
                }`}
                onClick={() => setSelectedSegment(segment.id)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      selectedSegment === segment.id ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <segment.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{segment.name}</CardTitle>
                  <CardDescription>{segment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {segment.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Planes Diseñados para tu <span className="text-secondary">Crecimiento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada plan incluye productos ilimitados, impacto medible y soporte especializado
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(plans).map(([key, plan]) => (
              <Card
                key={key}
                className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? "border-primary shadow-lg scale-105" : "border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.subtitle}</CardDescription>
                  <div className="py-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Check className="h-4 w-4 text-secondary mr-2" />
                      Incluye:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target className="h-4 w-4 text-accent mr-2" />
                      Ideal para:
                    </h4>
                    <ul className="space-y-1">
                      {plan.ideal.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                      }`}
                    >
                      Solicitar Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Hablar con Ventas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comparación Detallada</h2>
            <p className="text-muted-foreground">Encuentra el plan perfecto para tus necesidades específicas</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-6 font-semibold">Características</th>
                  <th className="text-center p-6 font-semibold text-secondary">Growth</th>
                  <th className="text-center p-6 font-semibold text-primary">Corporate</th>
                  <th className="text-center p-6 font-semibold text-accent">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-6 font-medium">Dashboard de Impacto</td>
                  <td className="text-center p-6">Básico</td>
                  <td className="text-center p-6">Avanzado con IA</td>
                  <td className="text-center p-6">White-label personalizado</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">Reportes</td>
                  <td className="text-center p-6">Trimestrales</td>
                  <td className="text-center p-6">Tiempo real 24/7</td>
                  <td className="text-center p-6">Tiempo real + Personalizados</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">Productos por año</td>
                  <td className="text-center p-6">5,000</td>
                  <td className="text-center p-6">Ilimitados</td>
                  <td className="text-center p-6">Ilimitados</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">Account Manager</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center p-6">
                    <Check className="h-5 w-5 text-accent mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">Integración ERP/SAP</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">Básica</td>
                  <td className="text-center p-6">Completa</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">API para desarrollos</td>
                  <td className="text-center p-6">-</td>
                  <td className="text-center p-6">Básica</td>
                  <td className="text-center p-6">Completa</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">Soporte</td>
                  <td className="text-center p-6">Email</td>
                  <td className="text-center p-6">24/7 Prioritario</td>
                  <td className="text-center p-6">Técnico Dedicado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Calcula tu <span className="text-secondary">ROI de Impacto</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Descubre cuánto valor genera tu inversión en merchandising con propósito social
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <span>Mejora en engagement de empleados: +35%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Fortalecimiento de reputación corporativa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-accent" />
                  </div>
                  <span>Impacto social medible y certificado</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Calcular mi ROI
                <BarChart3 className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Card className="p-6 shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Calculadora de ROI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Empleados</label>
                      <div className="text-2xl font-bold text-primary">500</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Presupuesto anual</label>
                      <div className="text-2xl font-bold text-secondary">$2.4M</div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Impacto Social Generado</span>
                      <span className="font-bold text-accent">$850K</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Mejora en Engagement</span>
                      <span className="font-bold text-primary">+35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">ROI Total</span>
                      <span className="font-bold text-secondary">+180%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">¿Listo para Liderar el Cambio?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Únete a las empresas que ya están transformando su merchandising en impacto social medible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
                Solicitar Demo Personalizada
                <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
              >
                Hablar con Especialista
                <Headphones className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
