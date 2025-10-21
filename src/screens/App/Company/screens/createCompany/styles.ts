import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
    paddingBottom: 40,
  },
  
  submitButton: {
    marginTop: 24,
  },
  switchContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  switchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  switchLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  switchDescription: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },

  statusIndicator: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },

  statusDotActive: {
    backgroundColor: "#16A34A",
  },

  statusDotInactive: {
    backgroundColor: "#9CA3AF",
  },

  statusTextActive: {
    color: "#16A34A",
    fontSize: 14,
    fontWeight: "600",
  },

  statusTextInactive: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "600",
  },
});