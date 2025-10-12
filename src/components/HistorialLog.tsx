import { StyleSheet, Text, View } from "react-native"

export interface Log {
    operation: string
    result: string
}

export default function HistorialLog({operation, result}: Log) {
    return (
        <View style={styles.logItem}>
            <Text style={styles.operation}>{operation} = <Text style={styles.result}>{result}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logItem: {
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    operation: {
        fontSize: 24,
        color: '#555',
    },
    result: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})