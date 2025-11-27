import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddHospital() {
  const [hospital, setHospital] = useState({
    hospital_name: "",
    hospital_address: "",
    hospital_contact: "",
    email_id: "",
    district: "",
    pincode: "",
    hospital_type: "",
    hospital_id: "",
  });

interface Hospital {
    hospital_name: string;
    hospital_address: string;
    hospital_contact: string;
    email_id: string;
    district: string;
    pincode: string;
    hospital_type: string;
    hospital_id: string;
}

const handleChange = (key: keyof Hospital, value: string) => {
    setHospital({ ...hospital, [key]: value });
};

  const handleSubmit = () => {
    console.log("Hospital Data:", hospital);

    // Later we can send this to Spring Boot API:
    /*
    fetch("http://localhost:8080/api/hospitals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hospital)
    })
    */

    router.push("/admin/hospitals");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Add Hospital</Text>

      <TextInput
        style={styles.input}
        placeholder="Hospital Name"
        value={hospital.hospital_name}
        onChangeText={(text) => handleChange("hospital_name", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hospital Address"
        value={hospital.hospital_address}
        onChangeText={(text) => handleChange("hospital_address", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hospital Contact"
        keyboardType="phone-pad"
        value={hospital.hospital_contact}
        onChangeText={(text) => handleChange("hospital_contact", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={hospital.email_id}
        onChangeText={(text) => handleChange("email_id", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="District"
        value={hospital.district}
        onChangeText={(text) => handleChange("district", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Pincode"
        keyboardType="numeric"
        value={hospital.pincode}
        onChangeText={(text) => handleChange("pincode", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hospital Type (Private/Govt/Trust)"
        value={hospital.hospital_type}
        onChangeText={(text) => handleChange("hospital_type", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hospital ID (UUID)"
        value={hospital.hospital_id}
        onChangeText={(text) => handleChange("hospital_id", text)}
      />

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btnSave} onPress={handleSubmit}>
          <Text style={styles.btnText}>Save Hospital</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCancel}
          onPress={() => router.push("/admin/hospitals")}
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
    textAlign: "center",
    marginBottom: 20,
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
