import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <Stack>
          <Stack.Screen
            name="(shop)"
            options={{ headerShown: false, title: "Shop" }}
          />
          <Stack.Screen
            name="categories"
            options={{ headerShown: false, title: "Categories" }}
          />
          <Stack.Screen
            name="product"
            options={{ headerShown: false, title: "Product" }}
          />
          <Stack.Screen
            name="cart"
            options={{ presentation: "modal", title: "Shopping Cart" }}
          />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </ToastProvider>
  );
}
