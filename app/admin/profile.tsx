import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AdminProfile() {
  const [profile, setProfile] = useState({
    admin_name: "Admin User",
    email: "admin@example.com",
    contact: "9876543210",
  });

  const [showPasswordSection, setShowPasswordSection] = useState(false);

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (key: string, value: string) => {
    setProfile({ ...profile, [key]: value });
  };

  const handlePasswordChange = (key: string, value: string) => {
    setPasswords({ ...passwords, [key]: value });
  };

  const saveProfile = () => {
    console.log("Profile saved:", profile);
    alert("Profile updated!");
  };

  const savePasswordChange = () => {
    if (!passwords.oldPassword || !passwords.newPassword || !passwords.confirmPassword) {
      alert("Please fill all password fields");
      return;
    }
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    console.log("Password change:", passwords);
    alert("Password updated!");
    setShowPasswordSection(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>Admin Profile</Text>

        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <Text style={styles.sectionTitle}>Profile Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Admin Name"
        value={profile.admin_name}
        aria-disabled={true}
        onChangeText={(text) => handleProfileChange("admin_name", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
                aria-disabled={true}

        value={profile.email}
        keyboardType="email-address"
        onChangeText={(text) => handleProfileChange("email", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={profile.contact}
                aria-disabled={true}

        keyboardType="numeric"
        onChangeText={(text) => handleProfileChange("contact", text)}
      />

      {/* <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
        <Text style={styles.saveBtnText}>Save Profile</Text>
      </TouchableOpacity> */}

      {/* Change Password Toggle */}
      <TouchableOpacity
        style={styles.changePasswordBtn}
        onPress={() => setShowPasswordSection(!showPasswordSection)}
      >
        <Text style={styles.changePasswordText}>
          {showPasswordSection ? "Hide Change Password" : "Change Password"}
        </Text>
      </TouchableOpacity>

      {/* Change Password Section */}
      {showPasswordSection && (
        <View style={styles.passwordSection}>
          <Text style={styles.sectionTitle}>Change Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Old Password"
            secureTextEntry
            value={passwords.oldPassword}
            onChangeText={(text) => handlePasswordChange("oldPassword", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={passwords.newPassword}
            onChangeText={(text) => handlePasswordChange("newPassword", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry
            value={passwords.confirmPassword}
            onChangeText={(text) => handlePasswordChange("confirmPassword", text)}
          />

          <TouchableOpacity style={styles.saveBtn} onPress={savePasswordChange}>
            <Text style={styles.saveBtnText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, paddingTop: 50 },

  // Top Bar
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  topTitle: { fontSize: 22, fontWeight: "bold" },
  logout: { color: "red", fontSize: 16, fontWeight: "600" },

  // Section Titles
  sectionTitle: { fontSize: 20, fontWeight: "700", marginVertical: 15 },

  // Inputs
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },

  // Save button
  saveBtn: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  saveBtnText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "600" },

  // Change Password Button
  changePasswordBtn: {
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#34C759",
  },
  changePasswordText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },

  // Password Section
  passwordSection: {
    paddingTop: 10,
  },
});
