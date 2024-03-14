import { StyleSheet, Image, View, Text } from "react-native";
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Post({ profileimg, profileName, postImage, description }) {
  return (
    <View style={{ marginTop: 16 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Image
          source={profileimg}
          style={{ width: 60, height: 60, borderRadius: 50 }} />
        <Text style={{ flex: 1, marginLeft: 16 }}>{profileName}</Text>
        <Feather name="more-vertical" size={24} color="black" />

      </View>
      <Image style={{ width: "100%", height: 400, marginTop:10 }} source={postImage} />
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <MaterialCommunityIcons
            name="cards-heart-outline" size={28} color="black"
          />

          <Feather name="message-circle" size={28} color="black" />
          <FontAwesome name="paper-plane-o" size={28} color="black" />
        </View>

        <View>
          <MaterialCommunityIcons
            name="bookmark-outline" size={28} color="black"
          />
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  post: { width: 100, height: 100, borderRadius: 50 },
  
});