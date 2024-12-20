import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CategoriesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
