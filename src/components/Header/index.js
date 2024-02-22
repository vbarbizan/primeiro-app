import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/logoinst.png';


export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={{ width: 200, height: 60 }} source={Logo} />
            <View style={styles.edit}>
                <TouchableOpacity><AntDesign name="hearto" size={35} color="black" style={{}} /></TouchableOpacity>
                <TouchableOpacity><Feather name="message-circle" size={35} color="black" /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    edit: {
        flexDirection: 'row',
        padding: 10,
        gap: 5,
    },

});