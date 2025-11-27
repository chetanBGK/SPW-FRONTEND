import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddPatient() {
  const [patient, setPatient] = useState({
    address: "",
    aadhar_no: "",
    age: "",
    assigned_doctor: "",
    contact_no: "",
    father_or_husband: "",
    gender: "",
    hospitalization_date: "",
    patient_name: "",
    pincode: "",
    procedure_name: "",
    state: "",
    doctor_id: "",
    hospital_id: "",
  });

  // Auto Fetch Date
  const created_at = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

  const handleChange = (key: string, value: string) => {
    setPatient({ ...patient, [key]: value });
  };

  const handleSubmit = () => {
    const finalData = { ...patient, created_at };

    console.log("Patient Details:", finalData);

    // Later: POST to your Spring Boot API
    /* 
    fetch("http://your-ip:8080/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    })
    */

    router.push("/admin/patients");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Add Patient</Text>

      <TextInput
        style={styles.input}
        placeholder="Patient Name"
        value={patient.patient_name}
        onChangeText={(text) => handleChange("patient_name", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Father / Husband Name"
        value={patient.father_or_husband}
        onChangeText={(text) => handleChange("father_or_husband", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        value={patient.age}
        onChangeText={(text) => handleChange("age", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={patient.gender}
        onChangeText={(text) => handleChange("gender", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Aadhar No"
        value={patient.aadhar_no}
        onChangeText={(text) => handleChange("aadhar_no", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact No"
        value={patient.contact_no}
        onChangeText={(text) => handleChange("contact_no", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={patient.address}
        onChangeText={(text) => handleChange("address", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Pincode"
        value={patient.pincode}
        onChangeText={(text) => handleChange("pincode", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={patient.state}
        onChangeText={(text) => handleChange("state", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Procedure Name"
        value={patient.procedure_name}
        onChangeText={(text) => handleChange("procedure_name", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Assigned Doctor"
        value={patient.assigned_doctor}
        onChangeText={(text) => handleChange("assigned_doctor", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hospitalization Date (YYYY-MM-DD)"
        value={patient.hospitalization_date}
        onChangeText={(text) => handleChange("hospitalization_date", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Doctor ID (UUID)"
        value={patient.doctor_id}
        onChangeText={(text) => handleChange("doctor_id", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hospital ID (UUID)"
        value={patient.hospital_id}
        onChangeText={(text) => handleChange("hospital_id", text)}
      />

      {/* created_at auto-added — not shown */}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btnSave} onPress={handleSubmit}>
          <Text style={styles.btnText}>Save Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancel} onPress={() => router.push("/admin/patients")}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
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
  buttonRow: { marginTop: 20 },
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
  btnText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "600" },
});
