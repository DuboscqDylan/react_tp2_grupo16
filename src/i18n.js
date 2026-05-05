import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      search: "¿Qué quieres reproducir?",
      favorites: "Favoritos",
      noResults: "No se encontraron resultados",
      noFavorites: "No tenés canciones favoritas",
      about: "Acerca de",
      emptyList: "No hay elementos en la lista",
      loadingMore: "Cargando más canciones…",
      noMoreSongs: "Has visto todas las canciones.",
      yourfavorites: "Tus favoritos",
      loading: "Cargando...",
      songNotFound: "No se encontró la canción",
      unknownArtist: "Artista desconocido",
      genre: "Género",
      album: "Álbum",
      releaseDate: "Fecha de lanzamiento",
      rating: "Puntuación",
      duration: "Duración",
      plays: "Reproducciones",
      repository: "Repositorio",
      scrollTop: "Arriba",
      error: "Error"
    }
  },
  en: {
    translation: {
      search: "What do you want to play?",
      favorites: "Favorites",
      noResults: "No results found",
      noFavorites: "You have no favorite songs",
      about: "About",
      emptyList: "No items in the list",
      loadingMore: "Loading more songs…",
      noMoreSongs: "You've seen all songs.",
      yourfavorites: "Your favorites",
      loading: "Loading...",
      songNotFound: "Song not found",
      unknownArtist: "Unknown artist",
      genre: "Genre",
      album: "Album",
      releaseDate: "Release date",
      rating: "Rating",
      duration: "Duration",
      plays: "Plays",
      repository: "Repository",
      scrollTop: "Top",
      error: "Error"
    }
  }
};

const savedLang = localStorage.getItem("lang") || "es";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;