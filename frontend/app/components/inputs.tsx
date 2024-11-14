export default function Input() {
    return (
        <>
            <form action="">
                <fieldset>
                    <label htmlFor="options">Choose your game: </label>
                    <select name="options" id="options" required>
                        <option value="pgn">PGN</option>
                        <option value="link">Game Link</option>
                        <option value="chesscom">Chess.com Id</option>
                        <option value="lichess">Lichess Id</option>
                    </select>
                    <label htmlFor="slider">Depth:</label>
                    <select name="slider" id="slider">
                        <option value="14" selected>
                            14 (~ 3 sec)
                        </option>
                        <option value="16">16 (~ 5 sec)</option>
                        <option value="18">18 (~ 10 sec)</option>
                        <option value="20">10 (~ 30 sec)</option>
                        <option value="22">22 (~ 1 min)</option>
                        <option value="99">99 (unlimited)</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="arrows">Show Arrows: </label>
                    <input type="checkbox" id="arrows" defaultChecked={false} />
                </fieldset>
                <button type="submit"> Analyze Game</button>
            </form>
        </>
    );
}
