"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, LogOut, User, HelpCircle, BarChart3, Home, ShoppingBag, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function DashboardHeader() {
  const [notifications] = useState([
    {
      id: 1,
      title: "Nuevo artista beneficiado",
      message: "María González completó su capacitación",
      time: "Hace 2 horas",
      unread: true,
    },
    {
      id: 2,
      title: "Reporte mensual disponible",
      message: "Tu reporte de impacto de julio está listo",
      time: "Hace 1 día",
      unread: true,
    },
  ])

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    localStorage.removeItem("impacthub_token")
    localStorage.removeItem("impacthub_role")
    window.location.href = "/login"
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Image
                src="/images/impacthub-logo.png"
                alt="ImpactHub Corporate"
                width={150}
                height={45}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/dashboard" className="flex items-center space-x-2 text-primary font-medium">
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/productos"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Productos</span>
              </Link>
              <Link
                href="/dashboard/equipo"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Users className="h-4 w-4" />
                <span>Mi Equipo</span>
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Sitio Público</span>
              </Link>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Company Info */}
            <div className="hidden md:flex items-center space-x-2">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Plan Corporate
              </Badge>
              <span className="text-sm text-muted-foreground">Empresa Innovadora S.A.</span>
            </div>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  {notifications.filter((n) => n.unread).length > 0 && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full text-xs flex items-center justify-center text-white">
                      {notifications.filter((n) => n.unread).length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4">
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-medium text-sm">{notification.title}</span>
                      {notification.unread && <span className="w-2 h-2 bg-secondary rounded-full"></span>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center">
                  <span className="text-sm text-primary">Ver todas las notificaciones</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.png" alt="Usuario" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Juan Pérez</p>
                    <p className="text-xs leading-none text-muted-foreground">Director de RSE</p>
                    <p className="text-xs leading-none text-muted-foreground">juan@empresainnovadora.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configuración</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Ayuda</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
