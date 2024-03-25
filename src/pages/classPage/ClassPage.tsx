import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { theme } from "../../theme/index";
import Navbar from "./navBar/Navbar";
import Form from "../../components/reusablesUi/Form";
import { useEffect, useState } from "react";
import { displayToast } from "../../utils/toast";
import Board from "./board/Board";
import Request from "./Request";
import { FAKE_RESPONSE } from "../../fakeData/fakeResponse";
import Overlay from "./welcomeMessage/Overlay";
import "react-toastify/dist/ReactToastify.css";
import MainContext from "../../contexts/mainContext";
import StaticBackground from "../../components/reusablesUi/StaticBackground";
import { boardAnimation } from "../../animations/animation";

export default function ClassPage() {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [board, setBoard] = useState(FAKE_RESPONSE);
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchInitialMessage = async () => {
    try {
      const response = await fetch(
        "https://api-japan-class.vercel.app/api/messages"
      );
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
      const data = await fetch("https://api-japan-class.vercel.app/api/chat", {
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

        playAudio(audioMessage);
      }
    } catch (error) {
      console.error("Error post message:", error);
    }
  };

  const playAudio = (message: HTMLAudioElement) => {
    if (!isMuted) {
      message.play();
      message.onplay = () => {
        setIsPlaying(true);
      };
      message.onpause = () => {
        setIsPlaying(false);
      };
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
    isPlaying,
    setIsPlaying,
    isLoading,
    setIsLoading,
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
            <div className="col">
              <div className="response-box">
                <TransitionGroup>
                  <CSSTransition
                    classNames={"board"}
                    key={board.english}
                    appear={true}
                    timeout={{ enter: 300, exit: 0 }}
                  >
                    <Board
                      data={board}
                      onClick={() => audio && playAudio(audio)}
                    />
                  </CSSTransition>
                </TransitionGroup>
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

    .col {
      width: 480px;
      min-width: 380px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 20px;

      .response-box {
        width: 100%;
        padding: 20px 0;
        display: flex;
        max-height: 80%;
        flex-direction: column;
        gap: ${theme.spacing.xs};
        overflow-y: hidden;
      }
    }
  }
  ${boardAnimation}
`;
