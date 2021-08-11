import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "genuine happiness",
  "❤️": "love",
  "😁": "gratified happiness.",
  "🙂": "passive-aggressive",
  "😂": " funny",
  "😅": "discomfort",
  "😍": "adoration"
};

const emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiMeaning(event) {
    var meaning = event.target.value;
    var emojiMeanings = emojiDictionary[meaning];

    if (emojiMeanings === undefined) {
      emojiMeanings = " The meaning of this emoji is not in our database ";
    }

    setMeaning(emojiMeanings);
  }

  function clickHandler(emoji) {
    console.log(emoji);
    var a = emojiDictionary[emoji];
    setMeaning(a);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>
      <input
        style={{ padding: "0.5rem", width: "90%", fontFamily: "STIX Two Text" }}
        placeholder="put an emoji to know its meaning "
        onChange={emojiMeaning}
      />
      <br />
      <br />
      <b>{meaning}</b>

      <br />

      <h3>Emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => clickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
