"use client";

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarIcon, Check } from 'lucide-react';
import { format } from 'date-fns';
import { TravelPackage } from '@/lib/data';

interface BookingFormProps {
  packageData: TravelPackage;
}

export default function BookingForm({ packageData }: BookingFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: '2',
    children: '0',
    date: null as Date | null,
    specialRequests: ''
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({ ...prev, date }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate form
      if (!formData.name || !formData.email || !formData.phone || !formData.date) {
        toast({
          title: "Error",
          description: "Please fill all required fields",
          variant: "destructive"
        });
        return;
      }
      
      setStep(2);
      return;
    }
    
    // Final submission
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Successful!",
        description: "We've sent the booking details to your email",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        adults: '2',
        children: '0',
        date: null,
        specialRequests: ''
      });
      setStep(1);
    }, 1500);
  };
  
  const totalTravelers = parseInt(formData.adults) + parseInt(formData.children || '0');
  const totalPrice = packageData.price * parseInt(formData.adults);
  
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 ? (
        <>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="adults">Adults</Label>
                <Select 
                  value={formData.adults} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, adults: value }))}
                >
                  <SelectTrigger id="adults">
                    <SelectValue placeholder="Adults" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="children">Children</Label>
                <Select 
                  value={formData.children} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, children: value }))}
                >
                  <SelectTrigger id="children">
                    <SelectValue placeholder="Children" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Travel Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, 'PPP') : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.date || undefined}
                    onSelect={handleDateSelect}
                    initialFocus
                    disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 6))}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
              <Textarea 
                id="specialRequests" 
                name="specialRequests" 
                placeholder="Any special requirements or requests?" 
                value={formData.specialRequests}
                onChange={handleChange}
                className="resize-none"
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full mt-6">
            Continue to Payment
          </Button>
        </>
      ) : (
        <>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Package:</span>
                  <span className="font-medium">{packageData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Travel Date:</span>
                  <span className="font-medium">{formData.date ? format(formData.date, 'PPP') : 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Travelers:</span>
                  <span className="font-medium">{totalTravelers} ({formData.adults} adults, {formData.children} children)</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per adult:</span>
                  <span className="font-medium">₹{packageData.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total Price:</span>
                <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                * Price includes all applicable taxes
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Payment Method</h3>
              <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-900 p-3 rounded-md border border-gray-200 dark:border-gray-700">
                <input type="radio" id="card" name="paymentMethod" checked readOnly className="h-4 w-4 text-primary" />
                <label htmlFor="card" className="flex-grow">Credit/Debit Card</label>
                <div className="flex space-x-1">
                  <div className="w-8 h-5 bg-blue-600 rounded"></div>
                  <div className="w-8 h-5 bg-red-500 rounded"></div>
                  <div className="w-8 h-5 bg-gray-300 rounded"></div>
                </div>
              </div>
              
              {/* Simulated card form */}
              <div className="space-y-3 mt-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="nameOnCard">Name on Card</Label>
                  <Input id="nameOnCard" placeholder="Enter name as on card" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <Button type="button" variant="outline" className="w-1/2" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" className="w-1/2" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Confirm Booking'}
            </Button>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>By confirming your booking, you agree to our <a href="#" className="text-primary hover:underline">Terms & Conditions</a></p>
          </div>
        </>
      )}
      
      <div className="mt-6 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <Check className="h-4 w-4 text-green-500 mr-2" />
        <span>Secure checkout with 256-bit SSL encryption</span>
      </div>
    </form>
  );
}