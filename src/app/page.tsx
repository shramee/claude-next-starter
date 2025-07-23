import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Code, Sparkles, Copy, Zap, Terminal, Palette, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Modern Development
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to start building with Claude AI assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  Ready-to-Use Components
                </CardTitle>
                <CardDescription>
                  Pre-built UI components with consistent styling and accessibility
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

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-6 w-6 text-green-600" />
                  Claude AI Optimized
                </CardTitle>
                <CardDescription>
                  Structured for seamless AI-assisted development workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Clear file organization</li>
                  <li>• Consistent naming conventions</li>
                  <li>• Type-safe patterns</li>
                  <li>• Copy-paste friendly code</li>
                  <li>• Comprehensive examples</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-6 w-6 text-purple-600" />
                  Modern Tech Stack
                </CardTitle>
                <CardDescription>
                  Latest technologies with optimal developer experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Next.js</span>
                    <span className="text-gray-500">v15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TypeScript</span>
                    <span className="text-gray-500">v5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tailwind CSS</span>
                    <span className="text-gray-500">v4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Turbopack</span>
                    <span className="text-green-500">Enabled</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section id="components" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Component Library
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive set of UI components ready for Claude AI development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Button Variants
                </CardTitle>
                <CardDescription>
                  Multiple button styles with consistent API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Copy className="h-5 w-5" />
                  Form Elements
                </CardTitle>
                <CardDescription>
                  Styled form components with proper accessibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Email address" type="email" />
                  <Input placeholder="Password" type="password" />
                  <div className="flex gap-2">
                    <Button className="flex-1">Submit</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="get-started" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Quick Start Guide</CardTitle>
              <CardDescription className="text-lg">
                Get up and running in minutes with Claude AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg">📁 Project Structure</h3>
                  <div className="font-mono text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border">
                    src/<br />
                    ├── app/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# App Router pages<br />
                    ├── components/&nbsp;&nbsp;&nbsp;# Reusable components<br />
                    │&nbsp;&nbsp;&nbsp;├── ui/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# UI primitives<br />
                    │&nbsp;&nbsp;&nbsp;├── navigation.tsx<br />
                    │&nbsp;&nbsp;&nbsp;└── footer.tsx<br />
                    └── lib/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Utilities & helpers
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">⚡ Quick Commands</h3>
                  <div className="space-y-3">
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded border">
                      <span className="text-gray-500">$</span> pnpm dev
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Start development server</div>
                    </div>
                    <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded border">
                      <span className="text-gray-500">$</span> pnpm build
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Build for production</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="font-semibold mb-4 text-lg">🎨 Available Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-medium">UI Components</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Button (6 variants)</li>
                      <li>• Input (styled)</li>
                      <li>• Card (modular)</li>
                      <li>• Navigation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Utilities</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• cn() class merger</li>
                      <li>• Type-safe helpers</li>
                      <li>• Date formatting</li>
                      <li>• Text utilities</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Developer Tools</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• ESLint configured</li>
                      <li>• TypeScript strict</li>
                      <li>• Path aliases</li>
                      <li>• Hot reloading</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
