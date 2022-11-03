import React, { useState , useCallback} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';



const App = () => {

  return(
  <View testID="welcome" style={styles.container}>
      <GroceryShoppingList />
  </View>
  
    );

  
  }
 
function GroceryShoppingList() {
    const [groceryItem, setGroceryItem] = useState('');
    const [items, setItems] = useState([]);
  
    const addNewItemToShoppingList = useCallback(() => {
      setItems([groceryItem, ...items]);
      setGroceryItem('');
    }, [groceryItem, items]);
  
    return (
      <>
        <TextInput testID='textFeld'
          autoComplete= 'off'
          value={groceryItem}
          placeholder="Enter grocery item"
          onChangeText={(text) => setGroceryItem(text)}
        />
        <Button
        testID='submitKnopf'
          title="Add the item to list"
          onPress={addNewItemToShoppingList}
        />
        {items.map((item) => (
          <Text testID='ekListe' key={item}>{item}</Text>
        ))}
      </>
    );
  }
  

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;