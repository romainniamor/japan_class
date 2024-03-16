import styled from "styled-components";
import { theme } from "../../theme/index";
import Navbar from "./Navbar";
import Form from "../../components/reusablesUi/Form";
import { useState } from "react";
import { displayToast } from "../../utils/toast";
import Response from "./Response";
import Request from "./Request";

import "react-toastify/dist/ReactToastify.css";

const SENTENCES = [
  {
    id: "sddaafhfksahagafskakh",
    sentence: "Hello, how are you?",
    translation: "こんにちは、お元気ですか？",
  },
  {
    id: "sqfqsbkjbkfsqsfq",
    sentence: "I am good, thank you.",
    translation: "元気です、ありがとう。",
  },
];

export default function ClassPage() {
  const [sentence, setSentence] = useState("");
  const [sentences, setSentences] = useState(SENTENCES);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sentence) {
      displayToast("👀 Oupsy!!! 🙈 Please type a sentence. ");
      return;
    }
    const sentencesCopy = JSON.parse(JSON.stringify(sentences));
    console.log("sentencesCopy", sentencesCopy);
    const newSentence = {
      id: crypto.randomUUID(),
      sentence: sentence,
      translation: "I am sorry, I can't translate it yet.",
    };
    console.log("newSentence", newSentence);
    setSentences([newSentence, ...sentencesCopy]);
    setSentence("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(e.target.value);
  };

  return (
    <ClassPageStyled>
      <Navbar />
      <img className="bg" src="/japan_class.png" alt="japan_class" />
      <div className="main-content">
        <div className="board">
          <div className="response-box">
            {sentences.map((sentence) => (
              <Response sentence={sentence} key={sentence.id} />
            ))}
          </div>
          <Request>
            <Form
              placeholder={"Type your sentence..."}
              label={"ask"}
              onSubmit={handleSubmit}
              onChange={handleChange}
              value={sentence}
            />
          </Request>
        </div>
      </div>
    </ClassPageStyled>
  );
}

const ClassPageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .main-content {
    flex: 1;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .board {
      width: 450px;
      min-width: 380px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 20px;

      .response-box {
        width: 100%;
        height: 400px;
        overflow-y: scroll;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.xs};
      }
    }
  }
`;
