import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#34d399"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass=""
      />
    </>
  );
}
