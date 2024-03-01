
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity,Image } from "react-native";
import Post from "../../assets/post.jpg"

export default function MyPosts() {
    return(

        <View>
            <View style={styles.icons}>   
            <TouchableOpacity>
                <MaterialIcons name="grid-on" size={24} color="black" />
            </TouchableOpacity>  
            
            <TouchableOpacity>
            <MaterialCommunityIcons name="movie-open-play-outline" size={24} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity>
            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>


            <View style={styles.post}>
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            <Image source={Post} style={styles.image} />
            </View>
        </View>
    );

}
    const styles = StyleSheet.create({
    icons: { justifyContent: "space-around", flexDirection:"row", marginTop:30},
    image: { width:"33.3%", height:120, borderColor:"white", borderWidth:1},
    post: { flexDirection:"row", flexWrap:"wrap", marginTop:15},

});