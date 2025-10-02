import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext"; // 🔑 import AuthContext
import { toast } from "@/hooks/use-toast";
import { LogIn, Loader2 } from "lucide-react";

// Backend URL from .env
const API_URL: string = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { t } = useLanguage();
  const navigate = useNavigate();

  const { login } = useAuth(); // 🔑 get login function from context

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = { message: "Invalid server response" };
      }

      if (res.ok) {
        // Update AuthContext state
        login(data.user, data.token); // 🔑 updates user in context and localStorage

        toast({
          title: "Welcome",
          description: `Logged in successfully as ${data.user.name} 🌿`,
        });

        navigate("/"); // redirect to dashboard/home
      } else {
        toast({
          title: "Error",
          description: data.message || "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("❌ Login error:", error);
      toast({
        title: "Error",
        description:
          error?.message || "Network error. Please check server connection.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md shadow-natural">
          <CardHeader className="text-center">
            <div className="mx-auto bg-herbal text-white p-3 rounded-full w-fit">
              <LogIn className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl font-serif text-herbal">
              {t("signIn")}
            </CardTitle>
            <CardDescription>
              {t("welcomeBack") || "Access your account"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="focus:ring-herbal focus:border-herbal"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="focus:ring-herbal focus:border-herbal"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full btn-large bg-herbal hover:bg-herbal-dark transition-smooth"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  t("signIn")
                )}
              </Button>
            </form>

            {/* No account link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {t("noAccount")}{" "}
                <Link
                  to="/user/register"
                  className="font-medium text-herbal hover:text-herbal-dark transition-smooth"
                >
                  {t("createAccount")}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
