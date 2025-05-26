"use client";

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Lock, User } from 'lucide-react';

export default function AdminLoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for authentication
    setTimeout(() => {
      setIsSubmitting(false);
      
      // For demo purposes, allow any login
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
      
      router.push('/admin/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Admin Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to access the admin dashboard
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-1">
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="pl-10"
                      placeholder="admin@example.com"
                      value={loginData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="pl-10"
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary hover:text-primary/80">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Signing in...' : 'Sign in'}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                      Demo credentials
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                    For demo purposes, you can use any email and password to sign in.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}