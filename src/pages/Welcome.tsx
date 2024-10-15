import { useNavigatePages } from "../hooks/useNavigatePages";
import { CustomizeButton } from "../components/CustomizeButton/CustomizeButton";
import { Slider } from "../components/Slider/Slider";

export function Welcome() {
  const { handleNavigation } = useNavigatePages();
  return (
    <>
      <h1>Welcome to Shopping 15-10-2024</h1>

      <CustomizeButton
        text="Comprar"
        color="#01eac2"
        onclick={() => {
          handleNavigation(`/shopping`);
        }}
      ></CustomizeButton>

      <CustomizeButton
        text="Solicitar Devolution Fast"
        color="#acc2ef"
        onclick={() => {
          handleNavigation(`/devolution`);
        }}
      ></CustomizeButton>

      <Slider />
    </>
  );
}