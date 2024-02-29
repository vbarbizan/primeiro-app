import {Image, StyleSheet, View, Text } from "react-native";

export default function infoProfile({image,publi,followers,following,description}){
      return (
        
        <View >
           <Image source={image} style={styles.story} />

             <View>
                <Text style={styles.publi}>{publi}</Text>
                <Text style={styles.publ2}>Publicações</Text>
          
                <Text style={styles.followers}>{followers}</Text>
                <Text style={styles.followers2}>Seguidores</Text>
            
                <Text style={styles.following}>{following}</Text>
                <Text style={styles.following2}>Seguidores</Text>
        
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.description2}>Descrição</Text>
             </View>

        </View>

      );
}

const styles = StyleSheet.create({
    story: { width: 100, height: 100, borderRadius: 50 },
    publi: { }
  });

