import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Code, Sparkles, Copy, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Claude Next Starter
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A Next.js starter optimized for copying and pasting code directly from Claude.
            Built with TypeScript, Tailwind CSS, and modern development tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Ready to Use Components
              </CardTitle>
              <CardDescription>
                Pre-built UI components with consistent styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full">Primary Button</Button>
                <Button variant="outline" className="w-full">Outline Button</Button>
                <Input placeholder="Type something..." />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Copy className="h-5 w-5" />
                Copy-Paste Friendly
              </CardTitle>
              <CardDescription>
                Utilities and helpers for rapid development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• TypeScript configured</li>
                <li>• Tailwind CSS utilities</li>
                <li>• Class variance authority</li>
                <li>• Lucide React icons</li>
                <li>• ESLint setup</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Modern Stack
              </CardTitle>
              <CardDescription>
                Latest Next.js with App Router and Turbopack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">
                  pnpm dev
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Fast development with hot reloading
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
            <CardDescription>
              Get started building with Claude-generated code
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">📁 Project Structure</h3>
                <div className="font-mono text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded">
                  src/<br />
                  ├── app/          # App Router pages<br />
                  ├── components/   # Reusable components<br />
                  │   └── ui/      # UI primitives<br />
                  └── lib/         # Utilities & helpers
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🎨 Available Components</h3>
                <div className="text-sm space-y-1">
                  <div>• Button (with variants)</div>
                  <div>• Input (styled)</div>
                  <div>• Card (with sub-components)</div>
                  <div>• Utility functions (cn, when, etc.)</div>
                  <div>• Lucide React icons</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
