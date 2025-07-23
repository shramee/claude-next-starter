import { Button } from "@/components/ui/button"
import { Code, Github, Sparkles } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Sparkles className="h-6 w-6 text-blue-600" />
            Claude Next Starter
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#components" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Components
            </Link>
            <Link href="#docs" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Docs
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#get-started" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
