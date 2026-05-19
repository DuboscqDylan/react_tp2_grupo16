import { render, screen } from "@testing-library/react";
import { ListSongs } from "./ListSongs";
import { BrowserRouter } from "react-router-dom";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}));

describe("ListSongs", () => {
    const songs = [
        {
            id: 1,
            name: "Bohemian Rhapsody",
            cover: "cover1.jpg",
            artistId: "queen",
            genre: "rock",
        },
        {
            id: 2,
            name: "Imagine",
            cover: "cover2.jpg",
            artistId: "john-lennon",
            genre: "pop",
        },
    ];

    it("muestra EmptyState cuando la lista esta vacía", () => {
        render(
           <ListSongs
                list={[]}
                isFavorite={() => false}
                onToggleFavorite={() => {}}
            />
        );

        expect(
            screen.getByText(/emptylist/i)
        ).toBeInTheDocument();
        });

        it("renderiza las canciones correctamente", () => {
        render(
            <BrowserRouter>
                <ListSongs
                list={songs}
                isFavorite={() => false}
                onToggleFavorite={() => {}}
                />
            </BrowserRouter>
        );

        expect(
            screen.getByText(/bohemian rhapsody/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/imagine/i)
        ).toBeInTheDocument();
    });
});