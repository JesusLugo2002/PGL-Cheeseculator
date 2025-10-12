import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useState } from "react";
import HistorialLog, { Log } from "./HistorialLog";
import ThemeText from "./ThemeText";
import { myColors } from "@/styles/Colors";
import { ThemeContext } from "@/context/ThemeContext";
import { styles } from "@/styles/GlobalStyles";

type Props = {
    historial: Log[];
}

export default function Historial({historial}: Props) {
    const [visible, setVisible] = useState(false);

    const toggleModal = () => setVisible(!visible);

    const theme = useContext(ThemeContext);
    return (
        <>
            <TouchableOpacity onPress={toggleModal}>
                <Text style={[theme === "light" ? styles.textDark : styles.textLight,{fontWeight:"bold"}]}>Historial</Text>
            </TouchableOpacity>

            <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={toggleModal}>
                <View style={stylos.modalOverlay}>
                    <View style={stylos.modalContent}>
                        <TouchableOpacity style={stylos.closeButton} onPress={toggleModal}>
                            <Text style={stylos.closeText}>Cerrar</Text>
                        </TouchableOpacity>
                        <Text style={stylos.title}>Historial</Text>
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

const stylos = StyleSheet.create({
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
