import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DoctorsScreen() {
  const [doctors, setDoctors] = useState([
    { id: "1", name: "Dr. Ramesh Kumar" },
    { id: "2", name: "Dr. Anita Singh" },
    { id: "3", name: "Dr. John Doe" },
  ]);

  const deleteDoctor = (id: string) => {
    setDoctors(doctors.filter((d) => d.id !== id));
  };

  return (
    <View style={styles.container}>

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>Doctors</Text>

        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Doctors List */}
      <View style={styles.listContainer}>
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.doctorItem}>
              <Text style={styles.doctorName}>{item.name}</Text>

              <TouchableOpacity onPress={() => deleteDoctor(item.id)}>
                <Text style={styles.delete}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => router.push("/admin/add-doctor")}
        >
          <Text style={styles.btnText}>Add Doctor</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.btnDelete}
          onPress={() => alert("Select a doctor to delete")}
        >
          <Text style={styles.btnText}>Delete Doctor</Text>
        </TouchableOpacity> */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  // Top Bar
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  topTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  logout: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
  },

  // List Section
  listContainer: {
    flex: 1,
    padding: 20,
  },
  doctorItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "500",
  },
  delete: {
    fontSize: 22,
    color: "red",
  },

  // Bottom Buttons
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  btnAdd: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  btnDelete: {
    backgroundColor: "#FF3B30",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
