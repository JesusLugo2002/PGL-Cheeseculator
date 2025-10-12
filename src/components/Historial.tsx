import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useState } from "react";
import HistorialLog, { Log } from "./HistorialLog";
import { myColors } from "@/styles/Colors";
import { ThemeContext } from "@/context/ThemeContext";

type Props = {
    historial: Log[];
}

export default function Historial({historial}: Props) {
    const [visible, setVisible] = useState(false);

    const toggleModal = () => setVisible(!visible);

    const theme = useContext(ThemeContext);
    return (
        <>
            <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
                <Text style={theme === "light" ? styles.modalButtonDark : styles.modalButtonLight}>Historial</Text>
            </TouchableOpacity>

            <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={toggleModal}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                            <Text style={styles.closeText}>Cerrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>Historial</Text>
                        <ScrollView>
                        {historial.map((log, index) => (
                            <HistorialLog
                            key={index}
                            operation={log.operation}
                            result={log.result}
                            />
                        ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
  modalButton: {
    borderWidth: 1,
    width: "75%",
    borderColor: myColors.cheddar
  },
  modalButtonDark: {
    color: myColors.dark,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  modalButtonLight: {
    color: myColors.white,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    height: '75%',
    width: '50%'
  },
  openText: {
    color: myColors.dark,
    fontWeight: 'bold',
    fontSize: 20
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeText: {
    color: myColors.dark,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});
