import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


export default function App() {
    return (
      <View style={styles.search}>
        <Text>Search Condition, Doctor......</Text>
        <Icon name='Search' size={20}/>
        <StatusBar style="auto" />
      </View>
    );
}
const styles=StyleSheet.create({
    search: {
        width:20, 
    },
});