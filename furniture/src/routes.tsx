import { createBrowserRouter } from "react-router";
import HomeScreen from "./pages/App";
import AboutScreen from "./pages/About";
import ErrorScreen from "./error";
import RootLayout from "./components/layout/RootLayout";
import LoginScreen from "./pages/auth/Login";
import AuthRootLayout from "@/components/layout/AuthRootLayout";
import SignupPage from "./pages/auth/Signup";
import Verify_OTPPage from "./pages/auth/Verify_OTP";
import ConfirmPasswordPage from "./pages/auth/ConfirmPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorScreen,
    children: [
      { index: true, Component: HomeScreen },
      { path: "about", Component: AboutScreen },
    ],
  },
  { path: "/login", Component: LoginScreen },
  //"/register"
  //"/register/otp"
  //"/register/password"
  {
    path: "/register",
    Component: AuthRootLayout,
    children: [
      { index: true, Component: SignupPage },
      { path: "verify-otp", Component: Verify_OTPPage },
      { path: "confirm-password", Component: ConfirmPasswordPage },
    ],
  },
]);
