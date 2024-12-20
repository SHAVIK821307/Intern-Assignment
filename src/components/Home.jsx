

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Home, FileCode, Shield, HelpCircle, Settings, LogOut, Search, RefreshCw, PlusCircle } from 'lucide-react'

const repositories = [
  {
    name: "design-system",
    status: "Public",
    language: "React",
    size: "7320 KB", 
    updatedAt: "1 day ago"
  },
  {
    name: "codeant-ci-app",
    status: "Private", 
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago"
  },
  {
    name: "analytics-dashboard",
    status: "Private",
    language: "Python", 
    size: "4521 KB",
    updatedAt: "5 days ago"
  },
  {
    name: "mobile-app",
    status: "Public",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago"
  },
  {
    name: "e-commerce-platform",
    status: "Private",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago"
  },
  {
    name: "blog-website",
    status: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago"
  },
  {
    name: "social-network",
    status: "Private",
    language: "PHP",
    size: "5432 KB", 
    updatedAt: "7 days ago"
  }
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="hidden md:block fixed inset-y-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-6">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="font-semibold">CodeAnt AI</span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          <NavLink
            href="/"
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900"
          >
            <Home className="h-4 w-4" />
            Repositories
          </NavLink>
          
          <NavLink
            href="/code-review"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <FileCode className="h-4 w-4" />
            AI Code Review
          </NavLink>

          <NavLink
            href="/security"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Shield className="h-4 w-4" />
            Cloud Security
          </NavLink>

          <NavLink
            href="/help"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <HelpCircle className="h-4 w-4" />
            How to Use
          </NavLink>

          <NavLink
            href="/settings"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Settings className="h-4 w-4" />
            Settings
          </NavLink>
        </nav>

        <div className="border-t border-gray-200 p-3">
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:pl-64 flex-1 bg-[#FAFAFA] md:p-8">
        <div className="md:ml-8 p-6 bg-[#FFFFFF] rounded-2xl border">
          <div className="mb-8 flex flex-wrap gap-2 items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
              <p className="text-sm text-gray-500">33 total repositories</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                <RefreshCw className="h-4 w-4" />
                Refresh All
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                <PlusCircle className="h-4 w-4" />
                Add Repository
              </button>
            </div>
          </div>

          <div className="mb-6 flex max-w-md items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Repositories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="space-y-4">
            {filteredRepos.map((repo) => (
              <div
                key={repo.name}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900">{repo.name}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3] `}
                    >
                      {repo.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">{repo.language}<span className="text-2xl text-[#1570EF]">•</span></span>
                    
                    <span>{repo.size}</span>
                    <span>Updated {repo.updatedAt}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

