import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";
import { style } from "@mui/system";

const quotes = [
  // By Nietzsche
  "The insatiable will always finds a way to detain its creatures in life and compel them to live on, by means of an illusion spread over things.",
  "He who has a why can bear almost any how",
  "One has to take a somewhat bold and dangerous line with this existence: especially as, whatever happens, we are bound to lose it.",
  "To escape boredom, man works either beyond what his usual needs require, or else he invents play, that is, work that is designed to quiet no need other than that for working in general.",
  "Man is something to be surpassed.",
];

export default function App() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  console.log("App started");
  console.log(quote);

  // Initially a random quote

  return (
    <View style={styles.Main}>
      {/* Assume that View and Text are default built-in components  */}
      {/* Quote up below, user is given option to refresh */}
      <View style={styles.QuoteAndPerson}>
        <Text style={styles.Quote}>"{quote}"</Text>

        {/* Set to another random quote on button click */}
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.ButtonContainer}>
        <Text style={styles.Person}> - Friedrich Nietzsche</Text>
        z
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#faf",
  },

  QuoteAndPerson: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 30,
    backgroundColor: "#faf",
    alignItems: "center",
    justifyContent: "center",
  },

  ButtonContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: "center",
    // justifyContent: "center",
  },

  Quote: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },

  Person: {
    paddingVertical: 14,
    fontSize: 20,
    fontWeight: "condensed",
    fontStyle: "italic",
  },
});
