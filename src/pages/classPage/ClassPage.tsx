import styled from "styled-components";
import { theme } from "../../theme/index";
import Navbar from "./navBar/Navbar";
import Form from "../../components/reusablesUi/Form";
import { useEffect, useState } from "react";
import { displayToast } from "../../utils/toast";
import Board from "./board/Board";
import Request from "./Request";
import { FAKE_MESSAGE } from "../../fakeData/sentences";
import Overlay from "./welcomeMessage/Overlay";
import "react-toastify/dist/ReactToastify.css";
import MainContext from "../../contexts/mainContext";
import Loading from "../../components/reusablesUi/Loading";
import StaticBackground from "../../components/reusablesUi/StaticBackground";

export default function ClassPage() {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [board, setBoard] = useState(FAKE_MESSAGE);
  const [audio, setAudio] = useState<HTMLAudioElement | null>();
  const [isMuted, setIsMuted] = useState(false);

  const fetchInitialMessage = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/messages");
      const res = await response.json();
      setBoard(res.data);
    } catch (error) {
      console.error("Error fetching initial message:", error);
    }
  };

  useEffect(() => {
    fetchInitialMessage();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) {
      displayToast("👀 Oupsy!!! 🙈 Please type a sentence. ");
      return;
    }
    try {
      setIsLoading(true);
      setMessage("");
      const data = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const responseData = await data.json();
      if (responseData.error) {
        displayToast("Sorry i don't understand👀🤯!!! Please try again.");
        setIsLoading(false);
        return;
      }
      const messages = responseData.messages;

      setBoard(messages);
      setIsLoading(false);
      if (responseData.audio) {
        const blob = responseData.audio;
        //remember ===>data:[<mediatype>][;base64],<data>
        const audioMessage = new Audio("data:audio/mp3;base64," + blob);
        setAudio(audioMessage);

        if (!isMuted) audioMessage.play();
        return;
      }
    } catch (error) {
      console.error("Error post message:", error);
    }
  };

  const handleSlowMotion = () => {
    if (audio && !isMuted) {
      audio.playbackRate = 0.7;
      audio.play();
    }
    return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const mainContextValue = {
    isVisible,
    setIsVisible,
    audio,
    setAudio,
    isMuted,
    setIsMuted,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      <ClassPageStyled>
        <Navbar />

        <StaticBackground />
        <div className="main-content">
          {!isVisible ? (
            <Overlay />
          ) : (
            <div className="board">
              <div className="response-box">
                {isLoading ? (
                  <Loading />
                ) : (
                  <Board data={board} onClick={handleSlowMotion} />
                )}
              </div>
              <Request>
                <Form
                  placeholder={"Type your sentence..."}
                  label={"ask"}
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                  value={message}
                />
              </Request>
            </div>
          )}
        </div>
      </ClassPageStyled>
    </MainContext.Provider>
  );
}

const ClassPageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .main-content {
    flex: 1;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .board {
      width: 480px;
      min-width: 380px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 20px;

      .response-box {
        width: 100%;
        max-height: 530px;
        overflow-y: scroll;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.xs};
      }
    }
  }
`;
