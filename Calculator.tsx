// App.js (or index.js)
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (label) => {
    if (label === "C") {
      setInput("");
      setResult("");
    } else if (label === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + label);
    }
  };

  const buttons = [
    ["C", "(", ")", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.display}>
        <Text style={styles.input}>{input || "0"}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

    
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((label) => (
              <Buttons key={label} label={label} onPress={handlePress} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    justifyContent: "flex-end",
  },
  display: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    backgroundColor: Colors.black,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  input: {
    fontSize: 42,
    color: Colors.white,
    textAlign: "right",
    fontWeight: "400",
  },
  result: {
    fontSize: 32,
    color: Colors.btnright,
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 8,
  },
  buttonsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 6,
  },
});
