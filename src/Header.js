import "./header.css";
function Header() {
    return (
        <div className="header">
            <a href="/#"><img id="logo" alt="logo" src="https://cdn.discordapp.com/emojis/701200343987650561.webp?size=64&quality=lossless"></img></a>
            <div class="header-links-column">
                <nav class="header-links">
                    <a className="h-link" href="/active">Active</a>
                    <a className="h-link" href="/recent">Recent</a>
                    <a className="h-link" href="/comments">Comments</a>
                    <a className="h-link" href="/search">Search</a>
                    <a id="h-login" className="h-link" href="/login">Login</a>
                </nav>
            </div>
        </div>
    )
}
export default Header;