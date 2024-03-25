import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <ThreeDots
        visible={true}
        height="30"
        width="30"
        color="#ffffff"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </>
  );
}
