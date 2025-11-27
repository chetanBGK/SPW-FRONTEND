import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AdminDashboard() {
  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>Admin Panel</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Center Welcome Message */}
      <View style={styles.centerContent}>
        <Text style={styles.welcome}>Welcome, Admin 👋</Text>
        <Text style={styles.sub}>Manage your system using the menu below</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/admin/doctors")} style={styles.navItem}>
          <Text style={styles.navText}>Doctors</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/admin/patients")} style={styles.navItem}>
          <Text style={styles.navText}>Patients</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/admin/hospitals")} style={styles.navItem}>
          <Text style={styles.navText}>Hospitals</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/admin/profile")} style={styles.navItem}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
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

  // Top bar
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
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

  // Center content
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sub: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },

    // Bottom navigation
    bottomNav: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    navItem: {
      alignItems: "center",
      padding: 10,
    },
    navText: {
      fontSize: 14,
      fontWeight: "600",
      color: "#333",
    },
  });
