import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = () => {
    if (!form.fullName || !form.email || !form.password) {
      Alert.alert("Missing fields", "Please fill in all required fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert("Password mismatch", "Passwords do not match.");
      return;
    }
    if (!agreed) {
      Alert.alert(
        "Terms",
        "Please agree to the Terms of Use and Privacy Policy.",
      );
      return;
    }
    Alert.alert("Account Created!", "Welcome to MamaCare 🌿", [
      { text: "OK", onPress: () => router.replace("/(auth)/sign-in") },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Back button */}
          <View style={{ paddingHorizontal: 20, paddingTop: 16 }}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ width: 38, height: 38, justifyContent: "center" }}
            >
              <Ionicons name="arrow-back" size={24} color="#111" />
            </TouchableOpacity>
          </View>

          {/* Header */}
          <View
            style={{ paddingHorizontal: 24, marginTop: 12, marginBottom: 24 }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "800",
                color: "#111",
                marginBottom: 6,
              }}
            >
              Create your account
            </Text>
            <Text style={{ fontSize: 14, color: "#999" }}>
              Join MamaCare and start your pregnancy journey with us.
            </Text>
          </View>

          {/* Fields */}
          <View style={{ paddingHorizontal: 24, gap: 14 }}>
            {/* Full name */}
            <Field
              icon="person-outline"
              placeholder="Full name"
              value={form.fullName}
              onChangeText={(v: string) => setForm({ ...form, fullName: v })}
            />

            {/* Email */}
            <Field
              icon="mail-outline"
              placeholder="Email address"
              value={form.email}
              onChangeText={(v: string) => setForm({ ...form, email: v })}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Phone with Nigeria flag */}
            <View style={fieldStyle}>
              <Ionicons name="call-outline" size={18} color="#BDBDBD" />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginHorizontal: 10,
                  paddingRight: 10,
                  borderRightWidth: 1,
                  borderRightColor: "#E8E8E8",
                }}
              >
                <Text style={{ fontSize: 16 }}>🇳🇬</Text>
                <Text
                  style={{ color: "#333", fontWeight: "600", fontSize: 13 }}
                >
                  +234
                </Text>
                <Ionicons name="chevron-down" size={13} color="#999" />
              </View>
              <TextInput
                placeholder="Phone number"
                placeholderTextColor="#BDBDBD"
                keyboardType="phone-pad"
                value={form.phone}
                onChangeText={(v) => setForm({ ...form, phone: v })}
                style={{ flex: 1, fontSize: 14, color: "#333" }}
              />
            </View>

            {/* Create password */}
            <PasswordField
              placeholder="Create password"
              value={form.password}
              onChangeText={(v: string) => setForm({ ...form, password: v })}
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />

            {/* Confirm password */}
            <PasswordField
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChangeText={(v: string) =>
                setForm({ ...form, confirmPassword: v })
              }
              show={showConfirm}
              onToggle={() => setShowConfirm(!showConfirm)}
            />

            {/* Terms checkbox */}
            <TouchableOpacity
              onPress={() => setAgreed(!agreed)}
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  borderWidth: 1.5,
                  borderColor: agreed ? "#2D7A4F" : "#CCC",
                  backgroundColor: agreed ? "#2D7A4F" : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {agreed && <Ionicons name="checkmark" size={13} color="#fff" />}
              </View>
              <Text style={{ fontSize: 13, color: "#666", flex: 1 }}>
                I agree to the{" "}
                <Text style={{ color: "#2D7A4F", fontWeight: "700" }}>
                  Terms of Use
                </Text>{" "}
                and{" "}
                <Text style={{ color: "#2D7A4F", fontWeight: "700" }}>
                  Privacy Policy.
                </Text>
              </Text>
            </TouchableOpacity>

            {/* Sign Up button */}
            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                backgroundColor: "#2D7A4F",
                borderRadius: 14,
                paddingVertical: 17,
                alignItems: "center",
                marginTop: 4,
                shadowColor: "#2D7A4F",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 12,
                elevation: 6,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
                Sign Up
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
                or sign up with
              </Text>
              <View
                style={{ flex: 1, height: 1, backgroundColor: "#F0F0F0" }}
              />
            </View>

            {/* Social buttons */}
            <View style={{ flexDirection: "row", gap: 12 }}>
              <SocialBtn label="Google" icon="logo-google" />
              <SocialBtn label="Apple" icon="logo-apple" />
            </View>

            {/* Log in link */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 4,
              }}
            >
              <Text style={{ color: "#999", fontSize: 14 }}>
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
                <Text
                  style={{ color: "#2D7A4F", fontWeight: "700", fontSize: 14 }}
                >
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const fieldStyle = {
  flexDirection: "row" as const,
  alignItems: "center" as const,
  borderWidth: 1,
  borderColor: "#EFEFEF",
  borderRadius: 12,
  backgroundColor: "#FAFAFA",
  paddingHorizontal: 14,
  height: 54,
};

function Field({
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  autoCapitalize = "words",
}: any) {
  return (
    <View style={{ ...fieldStyle, gap: 10 }}>
      <Ionicons name={icon} size={18} color="#BDBDBD" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={{ flex: 1, fontSize: 14, color: "#333" }}
      />
    </View>
  );
}

function PasswordField({
  placeholder,
  value,
  onChangeText,
  show,
  onToggle,
}: any) {
  return (
    <View style={{ ...fieldStyle, gap: 10 }}>
      <Ionicons name="lock-closed-outline" size={18} color="#BDBDBD" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!show}
        autoCapitalize="none"
        style={{ flex: 1, fontSize: 14, color: "#333" }}
      />
      <TouchableOpacity onPress={onToggle}>
        <Ionicons
          name={show ? "eye-outline" : "eye-off-outline"}
          size={19}
          color="#BDBDBD"
        />
      </TouchableOpacity>
    </View>
  );
}

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
