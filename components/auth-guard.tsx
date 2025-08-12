"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: "admin" | "employee" | "any"
}

export function AuthGuard({ children, requiredRole = "any" }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // TODO: Implement actual authentication check
    // For now, simulate authentication check
    const checkAuth = () => {
      const token = localStorage.getItem("impacthub_token")
      const userRole = localStorage.getItem("impacthub_role")

      if (!token) {
        router.push("/login")
        return
      }

      if (requiredRole !== "any" && userRole !== requiredRole) {
        router.push("/unauthorized")
        return
      }

      setIsAuthenticated(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [router, requiredRole])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Verificando acceso...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
