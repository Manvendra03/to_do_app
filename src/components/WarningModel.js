import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const WarningModal = ({ visible, title, description, onOkPress }) => {
  console.log("MODEL OPEN >>>>>>")
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onOkPress} // Handle back button press
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalDescription}>{description}</Text>

          <TouchableOpacity style={styles.okButton} onPress={onOkPress}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default WarningModal


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#1E368A',
    },
    modalDescription: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      color: '#555',
    },
    okButton: {
      backgroundColor: '#1E368A',
      padding: 10,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    okButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });