"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Eye, EyeOff, Building2, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<"corporate" | "employee">("corporate")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    company: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual authentication logic
    console.log("Login attempt:", formData, userType)
    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
          <h1 className="text-2xl font-bold">Accede a tu Dashboard</h1>
          <p className="text-muted-foreground">Mide el impacto social de tu empresa en tiempo real</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-4">
            <div className="flex space-x-2">
              <Button
                variant={userType === "corporate" ? "default" : "outline"}
                className={`flex-1 ${userType === "corporate" ? "bg-primary hover:bg-primary/90" : "bg-transparent"}`}
                onClick={() => setUserType("corporate")}
              >
                <Building2 className="h-4 w-4 mr-2" />
                Administrador
              </Button>
              <Button
                variant={userType === "employee" ? "default" : "outline"}
                className={`flex-1 ${
                  userType === "employee" ? "bg-secondary hover:bg-secondary/90" : "bg-transparent"
                }`}
                onClick={() => setUserType("employee")}
              >
                <Users className="h-4 w-4 mr-2" />
                Empleado
              </Button>
            </div>
            <div className="text-center">
              <CardTitle className="text-xl">
                {userType === "corporate" ? "Acceso Corporativo" : "Acceso de Empleado"}
              </CardTitle>
              <CardDescription>
                {userType === "corporate"
                  ? "Dashboard completo con métricas y reportes"
                  : "Ve el impacto de tu empresa y tus contribuciones"}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {userType === "corporate" && (
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Tu contraseña"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link href="/forgot-password" className="text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  <span>Conexión segura</span>
                </div>
              </div>

              <Button
                type="submit"
                className={`w-full ${
                  userType === "corporate" ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                Acceder al Dashboard
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="my-4" />
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">¿No tienes acceso aún?</p>
                <div className="flex flex-col space-y-2">
                  <Link href="/registro">
                    <Button variant="outline" className="w-full bg-transparent">
                      Registrar mi Empresa
                    </Button>
                  </Link>
                  <Link href="/solicitar-acceso">
                    <Button variant="ghost" className="w-full text-muted-foreground">
                      Solicitar Acceso como Empleado
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>
            ¿Necesitas ayuda?{" "}
            <Link href="/soporte" className="text-primary hover:underline">
              Contacta a nuestro equipo
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
