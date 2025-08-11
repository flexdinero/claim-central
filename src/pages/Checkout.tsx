import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Check } from "lucide-react";

export default function Checkout() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [paymentData, setPaymentData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const monthlyPrice = 97;
  const yearlyPrice = 82;
  const yearlyTotal = yearlyPrice * 12;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Complete Your Purchase</h1>
            <p className="text-muted-foreground">Join thousands of independent adjusters maximizing their potential</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Order Summary
                </CardTitle>
                <CardDescription>Flex.IA Pro - All Features Included</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Billing Toggle */}
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Billing Cycle</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={billingCycle === "monthly" ? "default" : "outline"}
                      onClick={() => setBillingCycle("monthly")}
                      className="w-full"
                    >
                      Monthly
                    </Button>
                    <Button
                      variant={billingCycle === "yearly" ? "default" : "outline"}
                      onClick={() => setBillingCycle("yearly")}
                      className="w-full"
                    >
                      Yearly (Save 15%)
                    </Button>
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Flex.IA Pro ({billingCycle})</span>
                    <span className="font-medium">
                      ${billingCycle === "monthly" ? monthlyPrice : yearlyPrice}/month
                    </span>
                  </div>
                  {billingCycle === "yearly" && (
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Billed annually</span>
                      <span>${yearlyTotal}/year</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>
                      ${billingCycle === "monthly" ? monthlyPrice : yearlyTotal}
                      {billingCycle === "yearly" ? "/year" : "/month"}
                    </span>
                  </div>
                </div>

                {/* Features Included */}
                <div className="space-y-3">
                  <h4 className="font-medium">Everything included:</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      "Unified Claims Hub (150+ Firms)",
                      "Integrated Communication Center",
                      "Smart Scheduling & Routing",
                      "Earnings & Financial Tracking",
                      "Secure Document Vault",
                      "Performance Analytics",
                      "AI Assistant",
                      "Mobile Companion App",
                      "24/7 Priority Support"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Secure checkout powered by Stripe</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Contact Information</h4>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={paymentData.email}
                        onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={paymentData.firstName}
                          onChange={(e) => setPaymentData({...paymentData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={paymentData.lastName}
                          onChange={(e) => setPaymentData({...paymentData, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Details */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Payment Details</h4>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={paymentData.expiryDate}
                          onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          value={paymentData.cvc}
                          onChange={(e) => setPaymentData({...paymentData, cvc: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Billing Address */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Billing Address</h4>
                    <div>
                      <Label htmlFor="billingAddress">Address</Label>
                      <Input
                        id="billingAddress"
                        placeholder="123 Main Street"
                        value={paymentData.billingAddress}
                        onChange={(e) => setPaymentData({...paymentData, billingAddress: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Austin"
                          value={paymentData.city}
                          onChange={(e) => setPaymentData({...paymentData, city: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          placeholder="TX"
                          value={paymentData.state}
                          onChange={(e) => setPaymentData({...paymentData, state: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          placeholder="78701"
                          value={paymentData.zipCode}
                          onChange={(e) => setPaymentData({...paymentData, zipCode: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Complete Purchase - ${billingCycle === "monthly" ? monthlyPrice : yearlyTotal}
                    {billingCycle === "yearly" ? "/year" : "/month"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                    Your subscription will automatically renew unless cancelled.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}