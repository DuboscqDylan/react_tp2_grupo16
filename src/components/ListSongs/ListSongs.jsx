import { CardSong } from "../CardSong/CardSong";

export const ListSongs = ({ list }) => {
    return (
        <>
            <p>{list.length === 0 ? "No hay elementos en la lista" : ""}</p>
            <ol>
                {list.map((element) => (
                    <li key={element.id}>
                        <CardSong
                            song={element}
                        />
                    </li>
                ))}
            </ol>
        </>
    )
}