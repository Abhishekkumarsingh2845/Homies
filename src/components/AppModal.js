import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AppModal = ({visible , children}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Full Screen Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          {
             children
          }
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  openButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)", // Dull transparent background
    justifyContent: "center",
    alignItems: "center",
  },



  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
