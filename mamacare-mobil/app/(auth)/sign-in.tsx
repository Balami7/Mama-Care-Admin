import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handleLogin = () => {
    if (!form.identifier || !form.password) {
      Alert.alert("Missing fields", "Please enter your email and password.");
      return;
    }
    Alert.alert("Welcome back!", "Login successful.");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Top-left decorative blobs */}
      <View
        style={{
          position: "absolute",
          top: -80,
          left: -60,
          width: 230,
          height: 230,
          borderRadius: 115,
          backgroundColor: "#E8F5EE",
          transform: [{ scaleX: 1.5 }],
        }}
      />
      <View
        style={{
          position: "absolute",
          top: -25,
          left: -10,
          width: 140,
          height: 140,
          borderRadius: 70,
          backgroundColor: "#C8E6D0",
          transform: [{ scaleX: 1.2 }],
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
        >
          <View style={{ flex: 1, paddingHorizontal: 24 }}>
            {/* Logo */}
            <View
              style={{ alignItems: "center", marginTop: 50, marginBottom: 8 }}
            >
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ width: 90, height: 90 }}
                resizeMode="contain"
              />
            </View>

            {/* Welcome text */}
            <View style={{ marginTop: 20, marginBottom: 28 }}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "800",
                  color: "#111",
                  marginBottom: 8,
                }}
              >
                Welcome back!
              </Text>
              <Text style={{ fontSize: 14, color: "#999", lineHeight: 21 }}>
                Log in to continue your pregnancy journey with MamaCare.
              </Text>
            </View>

            <View style={{ gap: 16 }}>
              {/* Email / Phone */}
              <View>
                <Text style={labelStyle}>Email or Phone number</Text>
                <View style={fieldStyle}>
                  <Ionicons name="mail-outline" size={18} color="#BDBDBD" />
                  <TextInput
                    placeholder="Enter your email or phone number"
                    placeholderTextColor="#BDBDBD"
                    value={form.identifier}
                    onChangeText={(v) => setForm({ ...form, identifier: v })}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{ flex: 1, fontSize: 14, color: "#333" }}
                  />
                </View>
              </View>

              {/* Password */}
              <View>
                <Text style={labelStyle}>Password</Text>
                <View style={fieldStyle}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={18}
                    color="#BDBDBD"
                  />
                  <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="#BDBDBD"
                    value={form.password}
                    onChangeText={(v) => setForm({ ...form, password: v })}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    style={{ flex: 1, fontSize: 14, color: "#333" }}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={19}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{ alignSelf: "flex-end", marginTop: 8 }}
                >
                  <Text
                    style={{
                      color: "#2D7A4F",
                      fontWeight: "600",
                      fontSize: 13,
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Log In button */}
              <TouchableOpacity
                onPress={handleLogin}
                style={{
                  backgroundColor: "#2D7A4F",
                  borderRadius: 14,
                  paddingVertical: 17,
                  alignItems: "center",
                  shadowColor: "#2D7A4F",
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.3,
                  shadowRadius: 12,
                  elevation: 6,
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}
                >
                  Log In
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <View
                  style={{ flex: 1, height: 1, backgroundColor: "#F0F0F0" }}
                />
                <Text style={{ color: "#BDBDBD", fontSize: 12 }}>
                  or continue with
                </Text>
                <View
                  style={{ flex: 1, height: 1, backgroundColor: "#F0F0F0" }}
                />
              </View>

              {/* Social */}
              <View style={{ flexDirection: "row", gap: 12 }}>
                <SocialBtn label="Google" icon="logo-google" />
                <SocialBtn label="Apple" icon="logo-apple" />
              </View>

              {/* Sign up link */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 4,
                }}
              >
                <Text style={{ color: "#999", fontSize: 14 }}>
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/sign-up")}
                >
                  <Text
                    style={{
                      color: "#2D7A4F",
                      fontWeight: "700",
                      fontSize: 14,
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const labelStyle = {
  fontSize: 13,
  fontWeight: "600" as const,
  color: "#444",
  marginBottom: 8,
};

const fieldStyle = {
  flexDirection: "row" as const,
  alignItems: "center" as const,
  borderWidth: 1,
  borderColor: "#EFEFEF",
  borderRadius: 12,
  backgroundColor: "#FAFAFA",
  paddingHorizontal: 14,
  height: 54,
  gap: 10,
};

function SocialBtn({ label, icon }: { label: string; icon: any }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderWidth: 1,
        borderColor: "#EFEFEF",
        borderRadius: 12,
        paddingVertical: 13,
        backgroundColor: "#FAFAFA",
      }}
    >
      <Ionicons name={icon} size={18} color="#333" />
      <Text style={{ fontWeight: "600", fontSize: 14, color: "#333" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
