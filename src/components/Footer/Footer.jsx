import { ArrowUp } from "lucide-react";

export const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] mt-10">

                <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-8">

                    <div className="flex flex-col items-center gap-4 text-sm text-[var(--color-text-secondary)]">

                        <a
                            href="https://github.com/LucasGabrielCerda"
                            target="_blank"
                            className="flex items-center justify-center gap-2 hover:text-[var(--color-text)] transition"
                        >
                            Lucas Gabriel Cerda FAI-2748<svg
                                role="img"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="currentColor"
                            >
                                <path d="M12 .5C5.7.5.6 5.6.6 12c0 5 3.2 9.3 7.6 10.8.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.7 3.1 1.2.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9a10 10 0 0 1 5.5 0c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.6 5-5.1 5.3.4.3.7.9.7 1.8v2.7c0 .4.2.7.8.6A10.8 10.8 0 0 0 23.4 12C23.4 5.6 18.3.5 12 .5z" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com/Nasabunc09"
                            target="_blank"
                            className="flex items-center justify-center gap-2 hover:text-[var(--color-text)] transition"
                        >
                            Cyntia Nasabun 119774<svg
                                role="img"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="currentColor"
                            >
                                <path d="M12 .5C5.7.5.6 5.6.6 12c0 5 3.2 9.3 7.6 10.8.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.7 3.1 1.2.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9a10 10 0 0 1 5.5 0c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.6 5-5.1 5.3.4.3.7.9.7 1.8v2.7c0 .4.2.7.8.6A10.8 10.8 0 0 0 23.4 12C23.4 5.6 18.3.5 12 .5z" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com/DuboscqDylan"
                            target="_blank"
                            className="flex items-center justify-center gap-2 hover:text-[var(--color-text)] transition"
                        >
                            Dylan Duboscq FAI-1967<svg
                                role="img"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="currentColor"
                            >
                                <path d="M12 .5C5.7.5.6 5.6.6 12c0 5 3.2 9.3 7.6 10.8.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.7 3.1 1.2.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9a10 10 0 0 1 5.5 0c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.6 5-5.1 5.3.4.3.7.9.7 1.8v2.7c0 .4.2.7.8.6A10.8 10.8 0 0 0 23.4 12C23.4 5.6 18.3.5 12 .5z" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com/DuboscqDylan/react_tp2_grupo16"
                            target="_blank"
                            className="flex items-center justify-center gap-2 font-medium hover:text-[var(--color-text)] transition"
                        >
                            Repositorio<svg
                                role="img"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                fill="currentColor"
                            >
                                <path d="M12 .5C5.7.5.6 5.6.6 12c0 5 3.2 9.3 7.6 10.8.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.7 3.1 1.2.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9a10 10 0 0 1 5.5 0c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.1-2.6 5-5.1 5.3.4.3.7.9.7 1.8v2.7c0 .4.2.7.8.6A10.8 10.8 0 0 0 23.4 12C23.4 5.6 18.3.5 12 .5z" />
                            </svg>
                        </a>
                    </div>

                    <button
                        onClick={scrollTop}
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition"
                    >
                        <ArrowUp size={16} />
                        Arriba
                    </button>

                </div>
            </footer>
        </>);
}