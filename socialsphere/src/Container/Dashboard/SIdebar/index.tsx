import { NavigationItem } from '../types'
import { LayoutDashboard, BarChart2, Box, FileText, CreditCard, Users, UserPlus, FolderKanban, LayoutGrid, Settings, KeyRound, HelpCircle, Download } from 'lucide-react'

const navigation: NavigationItem[] = [
  { name: 'Dashboards', icon: 'LayoutDashboard', path: '/dashboards' },
  { name: 'Reports', icon: 'BarChart2', path: '/reports' },
  { name: 'Applications', icon: 'Box', path: '/applications' },
  { name: 'Proposal', icon: 'FileText', path: '/proposal' },
  { name: 'Payment', icon: 'CreditCard', path: '/payment' },
  { name: 'Customers', icon: 'Users', path: '/customers' },
  { name: 'Leads', icon: 'UserPlus', path: '/leads' },
  { name: 'Projects', icon: 'FolderKanban', path: '/projects' },
  { name: 'Widgets', icon: 'LayoutGrid', path: '/widgets' },
  { name: 'Settings', icon: 'Settings', path: '/settings' },
  { name: 'Authentication', icon: 'KeyRound', path: '/auth' },
  { name: 'Help Center', icon: 'HelpCircle', path: '/help' }
]

const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
    BarChart2: <BarChart2 className="w-5 h-5" />,
    Box: <Box className="w-5 h-5" />,
    FileText: <FileText className="w-5 h-5" />,
    CreditCard: <CreditCard className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    UserPlus: <UserPlus className="w-5 h-5" />,
    FolderKanban: <FolderKanban className="w-5 h-5" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5" />,
    Settings: <Settings className="w-5 h-5" />,
    KeyRound: <KeyRound className="w-5 h-5" />,
    HelpCircle: <HelpCircle className="w-5 h-5" />
  }
  return icons[iconName] || null
}

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">SocialSphere</h1>
      </div>
      <nav className="flex-1 px-4">
        <p className="text-xs font-semibold text-gray-500 mb-4">NAVIGATION</p>
        <div className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
            >
              {getIcon(item.icon)}
              <span className="ml-3">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
      <div className="p-4 m-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <Download className="w-8 h-8" />
        </div>
        <h3 className="text-center font-medium mb-2">Downloading Center</h3>
        <p className="text-sm text-gray-500 text-center mb-4">
          SocialSphere is a production ready CRM to get started up and running easily.
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          DOWNLOAD NOW
        </button>
      </div>
    </div>
  )
}

