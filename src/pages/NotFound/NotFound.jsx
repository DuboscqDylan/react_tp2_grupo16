import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NotFound.css";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <img
        src="/image/404.png"
        alt="Página no encontrada"
        className="not-found-image"
      />

      <p className="not-found-text">
        {t("subtitle")}
      </p>

      <Link to="/" className="home-button">
        {t("back")}
      </Link>
    </div>
  );
}