import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen name="[slug]" options={{ title: "slug" }} />
    </Stack>
  );
}
