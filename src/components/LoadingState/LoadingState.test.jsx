import { render, screen } from "@testing-library/react";
import { LoadingState } from "./LoadingState";

describe("LoadingState", () => {
    it("muestra el texto de carga recibido", () => {
        render(
            <LoadingState text="Cargando canciones..." />
        );

        expect(
            screen.getByText(/cargando canciones/i)
        ).toBeInTheDocument();
    });

    it("renderiza correctamente otro mensaje de carga", () => {
        render(
            <LoadingState text="Buscando resultados..." />
        );

        expect(
            screen.getByText(/buscando resultados/i)
        ).toBeInTheDocument();
    });
});