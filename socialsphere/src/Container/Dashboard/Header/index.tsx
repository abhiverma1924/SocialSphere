import { Search, Bell, ShoppingCart, Moon, Menu } from 'lucide-react'
import { Button }  from "@mui/material"
import { Input }  from "@mui/material"

export function Header() {
  return (
    <header className="h-16 border-b bg-white">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          {/* <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mr-2">
            <span className="text-xl">+</span>
          </Button> */}
          <div className="hidden md:block">
            <Button >MEGA MENU</Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search..."
              className="pl-10 w-[200px]"
            />
          </div>
          <Button variant="outlined" >
            <img
              src="/placeholder.svg?height=20&width=20"
              alt="US Flag"
              className="h-5 w-5"
            />
          </Button>
          <Button variant="outlined" >
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="outlined" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </Button>
          <Button variant="outlined" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full" />
          </Button>
          <Button variant="outlined">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </Button>
        </div>
      </div>
    </header>
  )
}

