import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../Post";
import Fake1 from "../../src/assets/corin.jpg"
import PostImage from "../../src/assets/post.jpg"


export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />
      <Post
        profileimg={Fake1}
        profileName="Fulana da silva"
        postImage={PostImage}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra blandit urna, at maximus mi semper quis. Fusce et eros scelerisque, hendrerit est et, placerat nibh. Integer vel urna vitae est pulvinar congue. Pellentesque scelerisque venenatis ex." />

      <Post
        profileimg={Fake1}
        profileName="Fulana da silva"
        postImage={PostImage}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra blandit urna, at maximus mi semper quis. Fusce et eros scelerisque, hendrerit est et, placerat nibh. Integer vel urna vitae est pulvinar congue. Pellentesque scelerisque venenatis ex. "/>
    </ScrollView>
  );
}