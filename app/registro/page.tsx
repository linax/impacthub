"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const companySizes = [
  { value: "50-200", label: "50-200 empleados (PYME)" },
  { value: "200-1000", label: "200-1,000 empleados (Corporativo)" },
  { value: "1000+", label: "1,000+ empleados (Enterprise)" },
]

const industries = [
  { value: "tecnologia", label: "Tecnología" },
  { value: "financiero", label: "Servicios Financieros" },
  { value: "retail", label: "Retail y Comercio" },
  { value: "manufactura", label: "Manufactura" },
  { value: "salud", label: "Salud y Farmacéutica" },
  { value: "educacion", label: "Educación" },
  { value: "otros", label: "Otros" },
]

export default function RegistroPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Company Info
    companyName: "",
    industry: "",
    companySize: "",
    website: "",
    // Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    // Plan Selection
    interestedPlan: "",
    // Terms
    acceptTerms: false,
    acceptMarketing: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // TODO: Implement actual registration logic
      console.log("Registration data:", formData)
      setStep(4) // Success step
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nombre de la Empresa *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Ej: Empresa Innovadora S.A."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industria *</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData({ ...formData, industry: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu industria" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="companySize">Tamaño de la Empresa *</Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => setFormData({ ...formData, companySize: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Número de empleados" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Sitio Web</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://www.tuempresa.com"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellido *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Tu apellido"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico Corporativo *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@empresa.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+56 9 1234 5678"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Cargo *</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                placeholder="Ej: Director de RSE, Gerente de Marketing"
                required
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label>Plan de Interés</Label>
              <div className="grid gap-3">
                {[
                  {
                    id: "growth",
                    name: "ImpactHub Growth",
                    price: "$50,000/mes",
                    desc: "Para PYMES (50-200 empleados)",
                  },
                  {
                    id: "corporate",
                    name: "ImpactHub Corporate",
                    price: "$200,000/mes",
                    desc: "Para grandes empresas (200+ empleados)",
                  },
                  {
                    id: "enterprise",
                    name: "ImpactHub Enterprise",
                    price: "$500,000/mes",
                    desc: "Para líderes en transformación social",
                  },
                ].map((plan) => (
                  <Card
                    key={plan.id}
                    className={`cursor-pointer transition-all ${
                      formData.interestedPlan === plan.id
                        ? "border-primary shadow-md"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setFormData({ ...formData, interestedPlan: plan.id })}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{plan.name}</h3>
                          <p className="text-sm text-muted-foreground">{plan.desc}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{plan.price}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                />
                <Label htmlFor="terms" className="text-sm">
                  Acepto los{" "}
                  <Link href="/terminos" className="text-primary hover:underline">
                    términos y condiciones
                  </Link>{" "}
                  y la{" "}
                  <Link href="/privacidad" className="text-primary hover:underline">
                    política de privacidad
                  </Link>
                  *
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketing"
                  checked={formData.acceptMarketing}
                  onCheckedChange={(checked) => setFormData({ ...formData, acceptMarketing: checked as boolean })}
                />
                <Label htmlFor="marketing" className="text-sm">
                  Quiero recibir información sobre productos, eventos y contenido relevante de ImpactHub
                </Label>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">¡Registro Exitoso!</h3>
              <p className="text-muted-foreground">
                Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para
                coordinar una demo personalizada.
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-left">
              <h4 className="font-semibold mb-2">Próximos pasos:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Revisaremos tu información y necesidades específicas</li>
                <li>• Te contactaremos para agendar una demo personalizada</li>
                <li>• Configuraremos tu dashboard de impacto social</li>
                <li>• Comenzarás a medir el impacto de tu empresa</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <Button className="bg-primary hover:bg-primary/90" onClick={() => (window.location.href = "/")}>
                Volver al Inicio
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/login")}>
                Ir al Login
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Image
              src="/images/impacthub-logo.png"
              alt="ImpactHub Corporate"
              width={200}
              height={60}
              className="h-12 w-auto mx-auto mb-4"
            />
          </div>
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">{renderStep()}</CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al inicio</span>
          </Link>
          <Image
            src="/images/impacthub-logo.png"
            alt="ImpactHub Corporate"
            width={200}
            height={60}
            className="h-12 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Registra tu Empresa</h1>
          <p className="text-muted-foreground">Comienza a medir el impacto social de tu merchandising corporativo</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-xl">
                {step === 1 && "Información de la Empresa"}
                {step === 2 && "Datos de Contacto"}
                {step === 3 && "Selección de Plan"}
              </CardTitle>
              <div className="text-sm text-muted-foreground">Paso {step} de 3</div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStep()}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                    Anterior
                  </Button>
                )}
                <Button
                  type="submit"
                  className={`${step === 1 ? "w-full" : "ml-auto"} bg-primary hover:bg-primary/90`}
                  disabled={step === 3 && !formData.acceptTerms}
                >
                  {step === 3 ? "Completar Registro" : "Continuar"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
