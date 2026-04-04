import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf } from "lucide-react";

const Signup = () => {
  const [role, setRole] = useState("developer");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login("maria@greenforest.com", "password");
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
              <Leaf className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Join the carbon credit revolution</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <Label>Organization</Label>
              <Input placeholder="Your Organization" />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Project Developer</SelectItem>
                  <SelectItem value="buyer">Corporate Buyer</SelectItem>
                  <SelectItem value="verifier">Verifier (VVB)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button type="submit" className="w-full">Create Account</Button>
            <p className="text-sm text-muted-foreground">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
