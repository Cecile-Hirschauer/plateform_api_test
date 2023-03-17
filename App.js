import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    fetch(url)
        .then((resp) => resp.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data]);


  return (
      <View style={styles.container}>
        {loading ? (
            <Text>Loading...</Text>
        ) : (
            data.map((post, index) => {
              return (
                  <View key={index}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.body}</Text>
                  </View>
              );
            })
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
