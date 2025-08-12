"use client"

import { useState } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, Heart, Award, Download, Clock, DollarSign, BookOpen, ArrowUp, Eye, Share2 } from "lucide-react"
import Image from "next/image"
import { DashboardHeader } from "@/components/dashboard-header"

// Mock data - in real app this would come from API
const impactMetrics = {
  totalArtists: 127,
  totalFamilies: 89,
  trainingHours: 2840,
  employmentGenerated: 23,
  economicImpact: 2500000,
  productsDistributed: 15420,
  companiesImpacted: 8,
  socialReach: 45000,
}

const monthlyData = [
  { month: "Ene", artists: 15, training: 180, impact: 180000 },
  { month: "Feb", artists: 18, training: 220, impact: 220000 },
  { month: "Mar", artists: 22, training: 280, impact: 280000 },
  { month: "Apr", artists: 25, training: 320, impact: 320000 },
  { month: "May", artists: 28, training: 380, impact: 380000 },
  { month: "Jun", artists: 32, training: 420, impact: 420000 },
]

const artistStories = [
  {
    id: 1,
    name: "María González",
    age: 28,
    story:
      "Gracias al programa, María desarrolló sus habilidades artísticas y ahora trabaja medio tiempo en nuestro taller.",
    image: "/artist-maria.png",
    achievement: "Empleo estable logrado",
    productsCreated: 45,
    monthsInProgram: 8,
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    age: 24,
    story: "Carlos ha creado más de 60 diseños únicos y sus obras son las más solicitadas por las empresas.",
    image: "/artist-carlos.png",
    achievement: "Artista destacado",
    productsCreated: 67,
    monthsInProgram: 12,
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    age: 31,
    story: "Ana lidera talleres para otros artistas y se ha convertido en mentora del programa.",
    image: "/artist-ana.png",
    achievement: "Líder y mentora",
    productsCreated: 38,
    monthsInProgram: 15,
  },
]

const industryBenchmark = [
  { category: "Impacto Social", yourCompany: 85, industry: 62 },
  { category: "Engagement Empleados", yourCompany: 78, industry: 54 },
  { category: "Reputación ESG", yourCompany: 92, industry: 68 },
  { category: "Retención Talento", yourCompany: 88, industry: 71 },
]

const COLORS = ["#2E8B57", "#1E40AF", "#F97316", "#64748B"]

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("6months")
  const [selectedMetric, setSelectedMetric] = useState("all")

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <DashboardHeader />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Dashboard de Impacto Social</h1>
                <p className="text-muted-foreground mt-2">Monitorea el impacto social de tu empresa en tiempo real</p>
              </div>
              <div className="flex items-center space-x-4">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1month">Último mes</SelectItem>
                    <SelectItem value="3months">Últimos 3 meses</SelectItem>
                    <SelectItem value="6months">Últimos 6 meses</SelectItem>
                    <SelectItem value="1year">Último año</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-primary hover:bg-primary/90">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Reporte
                </Button>
              </div>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Artistas Beneficiados</CardTitle>
                <Users className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">{impactMetrics.totalArtists}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  +12% vs mes anterior
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Horas de Capacitación</CardTitle>
                <Clock className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{impactMetrics.trainingHours.toLocaleString()}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  +18% vs mes anterior
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Empleos Generados</CardTitle>
                <Award className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">{impactMetrics.employmentGenerated}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  +3 nuevos empleos
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Impacto Económico</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  ${(impactMetrics.economicImpact / 1000000).toFixed(1)}M
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                  +25% vs mes anterior
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="artists">Artistas</TabsTrigger>
              <TabsTrigger value="benchmark">Benchmarking</TabsTrigger>
              <TabsTrigger value="reports">Reportes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Charts Section */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Evolución del Impacto</CardTitle>
                    <CardDescription>Progreso mensual de métricas clave</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="artists" stroke="#2E8B57" strokeWidth={2} />
                        <Line type="monotone" dataKey="training" stroke="#1E40AF" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Distribución de Impacto</CardTitle>
                    <CardDescription>Áreas de mayor transformación social</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Capacitación", value: 40 },
                            { name: "Empleo", value: 30 },
                            { name: "Desarrollo Artístico", value: 20 },
                            { name: "Apoyo Familiar", value: 10 },
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {[
                            { name: "Capacitación", value: 40 },
                            { name: "Empleo", value: 30 },
                            { name: "Desarrollo Artístico", value: 20 },
                            { name: "Apoyo Familiar", value: 10 },
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                  <CardDescription>Últimos logros e hitos alcanzados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Award,
                        title: "Nuevo empleo generado",
                        description: "Ana Rodríguez consiguió trabajo de medio tiempo en taller artístico",
                        time: "Hace 2 días",
                        color: "text-accent",
                      },
                      {
                        icon: BookOpen,
                        title: "Capacitación completada",
                        description: "15 artistas completaron el módulo de técnicas avanzadas",
                        time: "Hace 5 días",
                        color: "text-primary",
                      },
                      {
                        icon: Heart,
                        title: "Nueva familia beneficiada",
                        description: "La familia Mendoza se unió al programa de apoyo integral",
                        time: "Hace 1 semana",
                        color: "text-secondary",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center`}>
                          <activity.icon className={`h-4 w-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="artists" className="space-y-6">
              <div className="grid gap-6">
                {artistStories.map((artist) => (
                  <Card key={artist.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <Image
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">{artist.name}</h3>
                            <Badge className="bg-secondary text-white">{artist.achievement}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{artist.story}</p>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-2xl font-bold text-primary">{artist.productsCreated}</div>
                              <div className="text-sm text-muted-foreground">Productos Creados</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-secondary">{artist.monthsInProgram}</div>
                              <div className="text-sm text-muted-foreground">Meses en Programa</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-accent">{artist.age}</div>
                              <div className="text-sm text-muted-foreground">Años</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benchmark" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Comparación con la Industria</CardTitle>
                  <CardDescription>Tu empresa vs promedio del sector tecnológico</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {industryBenchmark.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.category}</span>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-muted-foreground">Industria: {item.industry}%</span>
                            <span className="text-sm font-medium text-primary">Tu empresa: {item.yourCompany}%</span>
                          </div>
                        </div>
                        <div className="relative">
                          <Progress value={item.industry} className="h-2 bg-muted" />
                          <Progress value={item.yourCompany} className="h-2 absolute top-0 bg-primary/20" />
                        </div>
                        <div className="flex justify-end">
                          <Badge
                            variant={item.yourCompany > item.industry ? "default" : "secondary"}
                            className={
                              item.yourCompany > item.industry
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {item.yourCompany > item.industry ? "+" : ""}
                            {item.yourCompany - item.industry}% vs industria
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Reportes ESG</CardTitle>
                    <CardDescription>Certificaciones y documentos oficiales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        name: "Reporte de Impacto Social Q2 2024",
                        type: "PDF",
                        size: "2.4 MB",
                        date: "15 Jul 2024",
                      },
                      {
                        name: "Certificación ESG Anual",
                        type: "PDF",
                        size: "1.8 MB",
                        date: "01 Jul 2024",
                      },
                      {
                        name: "Métricas de Sostenibilidad",
                        type: "Excel",
                        size: "856 KB",
                        date: "28 Jun 2024",
                      },
                    ].map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Download className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{report.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {report.type} • {report.size} • {report.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Generar Nuevo Reporte</CardTitle>
                    <CardDescription>Crea reportes personalizados para stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tipo de Reporte</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="impact">Reporte de Impacto Social</SelectItem>
                          <SelectItem value="esg">Certificación ESG</SelectItem>
                          <SelectItem value="metrics">Métricas Detalladas</SelectItem>
                          <SelectItem value="custom">Reporte Personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Período</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el período" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="month">Último mes</SelectItem>
                          <SelectItem value="quarter">Último trimestre</SelectItem>
                          <SelectItem value="year">Último año</SelectItem>
                          <SelectItem value="custom">Período personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Download className="h-4 w-4 mr-2" />
                      Generar Reporte
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </AuthGuard>
  )
}
