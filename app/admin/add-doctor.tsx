import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddDoctor() {
  const [doctor, setDoctor] = useState({
    contact_no: "",
    email_id: "",
    first_name: "",
    last_name: "",
    gender: "",
    password: "",
    hospital_id: "",
  });

  const handleChange = (key: string, value: string) => {
    setDoctor({ ...doctor, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Doctor Details: ", doctor);

    // Later we will POST to your Spring Boot API
    // fetch("http://your-ip:8080/api/doctors", {...})

    router.push("/admin/doctors"); // Go back to list
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Add Doctor</Text>

      {/* FIRST NAME */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={doctor.first_name}
        onChangeText={(text) => handleChange("first_name", text)}
      />

      {/* LAST NAME */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={doctor.last_name}
        onChangeText={(text) => handleChange("last_name", text)}
      />

      {/* EMAIL */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={doctor.email_id}
        onChangeText={(text) => handleChange("email_id", text)}
      />

      {/* CONTACT NO */}
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="numeric"
        value={doctor.contact_no}
        onChangeText={(text) => handleChange("contact_no", text)}
      />

      {/* GENDER */}
      <TextInput
        style={styles.input}
        placeholder="Gender (Male/Female/Other)"
        value={doctor.gender}
        onChangeText={(text) => handleChange("gender", text)}
      />

      {/* PASSWORD */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={doctor.password}
        onChangeText={(text) => handleChange("password", text)}
      />

      {/* HOSPITAL ID */}
      <TextInput
        style={styles.input}
        placeholder="Hospital ID (UUID)"
        value={doctor.hospital_id}
        onChangeText={(text) => handleChange("hospital_id", text)}
      />

      {/* BUTTONS */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btnSave} onPress={handleSubmit}>
          <Text style={styles.btnText}>Save Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCancel}
          onPress={() => router.push("/admin/doctors")}
        >
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonRow: {
    marginTop: 20,
  },
  btnSave: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 15,
  },
  btnCancel: {
    backgroundColor: "red",
    paddingVertical: 14,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
