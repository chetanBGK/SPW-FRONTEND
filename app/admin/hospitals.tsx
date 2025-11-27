import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HospitalsScreen() {
  const [hospitals, setHospitals] = useState([
    {
      id: "1",
      hospital_name: "City Care Hospital",
      district: "Hyderabad",
      email_id: "contact@citycare.com",
      hospital_address: "123 Main Road",
      hospital_contact: "9876543210",
      hospital_type: "Private",
      pincode: "500001",
    },
    {
      id: "2",
      hospital_name: "Green Valley Hospital",
      district: "Bangalore",
      email_id: "info@greenvalley.com",
      hospital_address: "45 MG Road",
      hospital_contact: "9988776655",
      hospital_type: "Government",
      pincode: "560001",
    },
  ]);

  const deleteHospital = (id: string) => {
    setHospitals(hospitals.filter((h) => h.id !== id));
  };

  return (
    <View style={styles.container}>

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>Hospitals</Text>

        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* List of Hospitals */}
      <View style={styles.listContainer}>
        <FlatList
          data={hospitals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.hospitalItem}>
              <View>
                <Text style={styles.hospitalName}>{item.hospital_name}</Text>
                <Text style={styles.smallText}>District: {item.district}</Text>
                <Text style={styles.smallText}>Email: {item.email_id}</Text>
                <Text style={styles.smallText}>Address: {item.hospital_address}</Text>
                <Text style={styles.smallText}>Contact: {item.hospital_contact}</Text>
                <Text style={styles.smallText}>Type: {item.hospital_type}</Text>
                <Text style={styles.smallText}>Pincode: {item.pincode}</Text>
              </View>

              <TouchableOpacity onPress={() => deleteHospital(item.id)}>
                <Text style={styles.delete}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* ADD HOSPITAL BUTTON AT BOTTOM */}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => router.push("/admin/add-hospital")}
      >
        <Text style={styles.addButtonText}>+ Add Hospital</Text>
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

  // List Area
  listContainer: { flex: 1, padding: 20 },
  hospitalItem: {
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hospitalName: { fontSize: 18, fontWeight: "600" },
  smallText: { fontSize: 14, color: "#555" },
  delete: { fontSize: 22, color: "red" },

  // Add Button
  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 18,
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
});
