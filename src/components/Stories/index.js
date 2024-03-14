import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/img1.webp";
import Fake2 from "../../assets/img2.jpg";



export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity>
        <Image style={styles.story} source={Fake1} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.story} source={Fake2} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.story} source={Fake1} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.story} source={Fake2} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.story} source={Fake1} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.story} source={Fake2} />
      </TouchableOpacity>
      

    </ScrollView>

  
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 100,
  },
  story: { width: 100, height: 100, borderRadius: 50 },
});
