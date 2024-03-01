import {Image, StyleSheet, View, Text } from "react-native";

export default function InfoProfile({image,publi,followers,following,description}){
      return (
        
        <View>
           <Image source={image} style={styles.story} />

             <View>
                <Text style={styles.publi}>{publi}</Text>
                <Text style={styles.publi2}>Publicações</Text>
          
                <Text style={styles.followers}>{followers}</Text>
                <Text style={styles.followers2}>Seguidores</Text>
            
                <Text style={styles.following}>{following}</Text>
                <Text style={styles.following2}>Seguidores</Text>
        
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.description2}></Text>
             </View>

        </View>


      );
}

const styles = StyleSheet.create({
  story:{width: 100, height: 100, borderRadius:50 ,marginVertical:10},

  publi:{width: 40, height: 100, marginHorizontal: 145 ,marginVertical:-80 , fontSize:20},
  publi2:{width: 105, height: 100, marginHorizontal: 120},

  followers:{width: 50, height: 100, marginHorizontal: 230 , marginVertical:-120, fontSize:20},
  followers2:{width: 80, height: 100, marginHorizontal: 220, marginVertical:40},

  following:{width: 40, height: 100, marginHorizontal: 335 , marginVertical:-160, fontSize:20},
  following2:{width: 80, height: 100, marginHorizontal:305,marginVertical:80 },

  description:{marginVertical:-120}

  
  });


