"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, Users, CreditCard, Package, CalendarDays, MoreHorizontal, Plus, Search, LayoutDashboard, Briefcase as Suitcase, FileText, Settings, LogOut } from 'lucide-react';
import { travelPackages, TravelPackage } from '@/lib/data';

// Sample data for charts
const bookingData = [
  { month: 'Jan', bookings: 20 },
  { month: 'Feb', bookings: 45 },
  { month: 'Mar', bookings: 28 },
  { month: 'Apr', bookings: 80 },
  { month: 'May', bookings: 99 },
  { month: 'Jun', bookings: 65 },
  { month: 'Jul', bookings: 90 },
  { month: 'Aug', bookings: 110 },
  { month: 'Sep', bookings: 125 },
  { month: 'Oct', bookings: 85 },
  { month: 'Nov', bookings: 50 },
  { month: 'Dec', bookings: 40 },
];

const revenueData = [
  { month: 'Jan', revenue: 200000 },
  { month: 'Feb', revenue: 450000 },
  { month: 'Mar', revenue: 280000 },
  { month: 'Apr', revenue: 800000 },
  { month: 'May', revenue: 990000 },
  { month: 'Jun', revenue: 650000 },
  { month: 'Jul', revenue: 900000 },
  { month: 'Aug', revenue: 1100000 },
  { month: 'Sep', revenue: 1250000 },
  { month: 'Oct', revenue: 850000 },
  { month: 'Nov', revenue: 500000 },
  { month: 'Dec', revenue: 400000 },
];

const packageDistributionData = [
  { name: 'Goa', value: 30 },
  { name: 'Kerala', value: 25 },
  { name: 'Rajasthan', value: 20 },
  { name: 'Himachal', value: 15 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

// Sample recent bookings data
const recentBookings = [
  {
    id: 'BK001',
    customer: 'Rahul Sharma',
    package: 'Goa Getaway',
    date: '2023-10-15',
    amount: 25000,
    status: 'Confirmed'
  },
  {
    id: 'BK002',
    customer: 'Priya Patel',
    package: 'Kerala Backwaters',
    date: '2023-10-14',
    amount: 36000,
    status: 'Pending'
  },
  {
    id: 'BK003',
    customer: 'Amit Singh',
    package: 'Rajasthan Heritage Tour',
    date: '2023-10-12',
    amount: 44000,
    status: 'Confirmed'
  },
  {
    id: 'BK004',
    customer: 'Sneha Gupta',
    package: 'Andaman Island Escape',
    date: '2023-10-10',
    amount: 50000,
    status: 'Cancelled'
  },
  {
    id: 'BK005',
    customer: 'Rajesh Kumar',
    package: 'Himachal Adventure',
    date: '2023-10-09',
    amount: 30000,
    status: 'Confirmed'
  }
];

export default function AdminDashboardPage() {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    setPackages(travelPackages);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-900 text-white">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">TravelEase Admin</h2>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            <Link 
              href="/admin/dashboard" 
              className="flex items-center px-4 py-3 text-white bg-gray-800 rounded-md group"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link 
              href="/admin/dashboard" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md group"
            >
              <Suitcase className="mr-3 h-5 w-5" />
              Packages
            </Link>
            <Link 
              href="/admin/dashboard" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md group"
            >
              <FileText className="mr-3 h-5 w-5" />
              Bookings
            </Link>
            <Link 
              href="/admin/dashboard" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md group"
            >
              <Users className="mr-3 h-5 w-5" />
              Customers
            </Link>
            <Link 
              href="/admin/dashboard" 
              className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md group"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-800">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="py-4 px-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                  A
                </div>
                <span className="text-gray-700 dark:text-gray-300">Admin</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                <Package className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">837</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                    +12.5% <ArrowUpRight className="h-3 w-3 ml-1" />
                  </span>{' '}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <CreditCard className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹7,42,500</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                    +8.2% <ArrowUpRight className="h-3 w-3 ml-1" />
                  </span>{' '}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Packages</CardTitle>
                <Suitcase className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{packages.length}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                    +2 <ArrowUpRight className="h-3 w-3 ml-1" />
                  </span>{' '}
                  new this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">512</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span className="text-green-500 dark:text-green-400 inline-flex items-center">
                    +18.7% <ArrowUpRight className="h-3 w-3 ml-1" />
                  </span>{' '}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Booking Overview</CardTitle>
                <CardDescription>Monthly booking statistics for the past year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={bookingData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bookings" fill="hsl(var(--chart-1))" name="Bookings" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analysis</CardTitle>
                <CardDescription>Monthly revenue statistics for the past year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={revenueData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Revenue']}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="hsl(var(--chart-2))" 
                        strokeWidth={2} 
                        name="Revenue" 
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Package Distribution</CardTitle>
                <CardDescription>Bookings by destination</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={packageDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {packageDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest customer bookings</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">ID</th>
                        <th className="text-left py-3 px-2 font-medium">Customer</th>
                        <th className="text-left py-3 px-2 font-medium">Package</th>
                        <th className="text-left py-3 px-2 font-medium">Date</th>
                        <th className="text-left py-3 px-2 font-medium">Amount</th>
                        <th className="text-left py-3 px-2 font-medium">Status</th>
                        <th className="text-left py-3 px-2 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="border-b">
                          <td className="py-3 px-2">{booking.id}</td>
                          <td className="py-3 px-2">{booking.customer}</td>
                          <td className="py-3 px-2">{booking.package}</td>
                          <td className="py-3 px-2">{booking.date}</td>
                          <td className="py-3 px-2">₹{booking.amount.toLocaleString()}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                : booking.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-3 px-2">
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Package Management */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Package Management</CardTitle>
                <CardDescription>View and manage all travel packages</CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Package
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All Packages</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-medium">ID</th>
                          <th className="text-left py-3 px-2 font-medium">Package Name</th>
                          <th className="text-left py-3 px-2 font-medium">Location</th>
                          <th className="text-left py-3 px-2 font-medium">Duration</th>
                          <th className="text-left py-3 px-2 font-medium">Price</th>
                          <th className="text-left py-3 px-2 font-medium">Rating</th>
                          <th className="text-left py-3 px-2 font-medium">Featured</th>
                          <th className="text-left py-3 px-2 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {packages.map((pkg) => (
                          <tr key={pkg.id} className="border-b">
                            <td className="py-3 px-2">{pkg.id}</td>
                            <td className="py-3 px-2">{pkg.name}</td>
                            <td className="py-3 px-2">{pkg.location}</td>
                            <td className="py-3 px-2">{pkg.duration}</td>
                            <td className="py-3 px-2">₹{pkg.price.toLocaleString()}</td>
                            <td className="py-3 px-2">{pkg.rating} ({pkg.reviewCount})</td>
                            <td className="py-3 px-2">
                              {pkg.featured ? (
                                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  Yes
                                </span>
                              ) : (
                                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                  No
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-2">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-950">Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="featured">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-medium">ID</th>
                          <th className="text-left py-3 px-2 font-medium">Package Name</th>
                          <th className="text-left py-3 px-2 font-medium">Location</th>
                          <th className="text-left py-3 px-2 font-medium">Duration</th>
                          <th className="text-left py-3 px-2 font-medium">Price</th>
                          <th className="text-left py-3 px-2 font-medium">Rating</th>
                          <th className="text-left py-3 px-2 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {packages.filter(pkg => pkg.featured).map((pkg) => (
                          <tr key={pkg.id} className="border-b">
                            <td className="py-3 px-2">{pkg.id}</td>
                            <td className="py-3 px-2">{pkg.name}</td>
                            <td className="py-3 px-2">{pkg.location}</td>
                            <td className="py-3 px-2">{pkg.duration}</td>
                            <td className="py-3 px-2">₹{pkg.price.toLocaleString()}</td>
                            <td className="py-3 px-2">{pkg.rating} ({pkg.reviewCount})</td>
                            <td className="py-3 px-2">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-950">Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="active">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-medium">ID</th>
                          <th className="text-left py-3 px-2 font-medium">Package Name</th>
                          <th className="text-left py-3 px-2 font-medium">Location</th>
                          <th className="text-left py-3 px-2 font-medium">Duration</th>
                          <th className="text-left py-3 px-2 font-medium">Price</th>
                          <th className="text-left py-3 px-2 font-medium">Rating</th>
                          <th className="text-left py-3 px-2 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {packages.map((pkg) => (
                          <tr key={pkg.id} className="border-b">
                            <td className="py-3 px-2">{pkg.id}</td>
                            <td className="py-3 px-2">{pkg.name}</td>
                            <td className="py-3 px-2">{pkg.location}</td>
                            <td className="py-3 px-2">{pkg.duration}</td>
                            <td className="py-3 px-2">₹{pkg.price.toLocaleString()}</td>
                            <td className="py-3 px-2">{pkg.rating} ({pkg.reviewCount})</td>
                            <td className="py-3 px-2">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-950">Delete</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="inactive">
                  <div className="flex flex-col items-center justify-center py-12">
                    <CalendarDays className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Inactive Packages</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-md mb-6">
                      There are currently no inactive packages. All packages are active and available for booking.
                    </p>
                    <Button>Add New Package</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}