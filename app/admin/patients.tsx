import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PatientsScreen() {

  const [patients, setPatients] = useState([
    {
      id: "1",
      patient_name: "Ravi Kumar",
      age: "45",
      gender: "Male",
      procedure_name: "Surgery",
      contact_no: "9876543210",
    },
    {
      id: "2",
      patient_name: "Anita Devi",
      age: "32",
      gender: "Female",
      procedure_name: "Checkup",
      contact_no: "9876501234",
    },
  ]);

  const deletePatient = (id: string) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  return (
    <View style={styles.container}>

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>Patients</Text>

        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Patients List */}
      <View style={styles.listContainer}>
        <FlatList
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.patientItem}>
              <View>
                <Text style={styles.patientName}>{item.patient_name}</Text>
                <Text style={styles.smallText}>Age: {item.age}</Text>
                <Text style={styles.smallText}>Gender: {item.gender}</Text>
                <Text style={styles.smallText}>Procedure: {item.procedure_name}</Text>
                <Text style={styles.smallText}>Contact: {item.contact_no}</Text>
              </View>

              <TouchableOpacity onPress={() => deletePatient(item.id)}>
                <Text style={styles.delete}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Add Patient Button - Fixed at Bottom */}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => router.push("/admin/add-patient")}
      >
        <Text style={styles.addButtonText}>+ Add Patient</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },

  // Top Bar
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  topTitle: { fontSize: 22, fontWeight: "bold" },
  logout: { color: "red", fontSize: 16, fontWeight: "600" },

  // Patients List
  listContainer: { flex: 1, padding: 20 },
  patientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  patientName: { fontSize: 18, fontWeight: "600" },
  smallText: { fontSize: 14, color: "#555" },
  delete: { fontSize: 22, color: "red" },

  // Bottom Add Button
  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
