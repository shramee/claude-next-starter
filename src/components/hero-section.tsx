import { Button } from "@/components/ui/button"
import { Code, Sparkles, ArrowRight, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700/25" />

			<div className="relative container mx-auto px-4 py-24 md:py-32">
				<div className="text-center max-w-4xl mx-auto">
					<div className="flex items-center justify-center gap-2 mb-6">
						<div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
							<Sparkles className="h-4 w-4 text-blue-600" />
							<span className="text-sm font-medium text-blue-700 dark:text-blue-300">
								AI-Optimized Starter
							</span>
						</div>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
						Next starter for {" "}
						<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Claude AI
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
						A modern Next.js starter template designed for seamless AI-assisted development.
						Copy, paste, and build amazing applications with Claude's help.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<Button size="lg" className="text-lg px-8 py-6" asChild>
							<Link href="#get-started" className="flex items-center gap-2">
								<Code className="h-5 w-5" />
								Get Started
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>

						<Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
							<Link href="https://github.com/shramee/claude-next-starter/archive/refs/heads/main.zip" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
								<Download className="h-5 w-5" />
								Download Template
							</Link>
						</Button>
					</div>

					<div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							TypeScript Ready
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							Tailwind CSS
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
							Next.js 15
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
							Claude Optimized
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
