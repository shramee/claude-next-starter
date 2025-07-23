import { Button } from "@/components/ui/button"
import { Github, Twitter, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
	return (
		<footer className="border-t bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<h3 className="font-semibold text-lg">Claude Next Starter</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							A modern Next.js starter template optimized for AI-assisted development with Claude.
						</p>
						<div className="flex space-x-2">
							<Button variant="ghost" size="sm" asChild>
								<Link href="https://github.com/shramee/claude-next-starter" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
									<Github className="h-4 w-4" />
								</Link>
							</Button>
							<Button variant="ghost" size="sm" asChild>
								<Link href="https://twitter.com/shrameetweets" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
									<Twitter className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>

					<div className="space-y-4">
						<h4 className="font-medium">Resources</h4>
						<div className="space-y-2 text-sm">
							<Link href="https://github.com/shramee/claude-next-starter#readme" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
								Documentation
							</Link>
							<Link href="https://github.com/shramee/claude-next-starter/tree/main/examples" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
								Examples
							</Link>
							<Link href="https://github.com/shramee/claude-next-starter/releases" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
								Releases
							</Link>
						</div>
					</div>

					<div className="space-y-4">
						<h4 className="font-medium">Community</h4>
						<div className="space-y-2 text-sm">
							<Link href="https://github.com/shramee/claude-next-starter/issues" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
								Issues
							</Link>
							<Link href="https://github.com/shramee/claude-next-starter/discussions" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
								GitHub Discussions
							</Link>
							<Link href="https://github.com/shramee/claude-next-starter/blob/main/CONTRIBUTING.md" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
								Contributing
							</Link>
						</div>
					</div>

					<div className="space-y-4">
						<h4 className="font-medium">Built With</h4>
						<div className="space-y-2 text-sm">
							<Link href="https://nextjs.org" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
								Next.js
							</Link>
							<Link href="https://tailwindcss.com" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
								Tailwind CSS
							</Link>
							<Link href="https://www.typescriptlang.org" className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
								TypeScript
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-gray-600 dark:text-gray-400">
						© 2025 Claude Next Starter. Built with <Heart className="h-4 w-4 inline text-red-500" /> for developers.
					</p>
					<p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
						Ready for Claude AI assistance
					</p>
				</div>
			</div>
		</footer>
	)
}
