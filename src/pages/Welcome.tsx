import { useNavigatePages } from "../hooks/useNavigatePages";
import { CustomizeButton } from "../components/CustomizeButton/CustomizeButton";
import { Slider } from "../components/Slider/Slider";

export function Welcome() {
  const { handleNavigation } = useNavigatePages();
  return (
    <>
      <h1>Welcome to Shopping Clase 15 de Octubre</h1>

      <CustomizeButton
        text="Compra Ya es el moemnto"
        color="#01eac2"
        onclick={() => {
          handleNavigation(`/shopping`);
        }}
      ></CustomizeButton>

      <CustomizeButton
        text="Solicitar Devolution "
        color="#acc2ef"
        onclick={() => {
          handleNavigation(`/devolution`);
        }}
      ></CustomizeButton>

      <Slider />
    </>
  );
}
