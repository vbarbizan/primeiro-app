
import { View, StyleSheet } from "react-native";
import FotoPerfil from "./src/assets/corin.jpg";
import InfoProfile from "./src/components/InfoProfile";

export default function App() {
  return (
    <View
      style={styles.container}>

     <InfoProfile
      image={FotoPerfil}
      publi= {250 }
      followers= {1230 }
      following= { 5}
      description= "Vai Corinthians" />

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    marginHorizontal:16,
    marginVertical:35
  },
});
