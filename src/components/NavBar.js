const NavBar = ({ currentTime }) => {
    return(
        <div className="nav">
            <div className="logo">
                <img src="/logo192.png" alt="IRIS iMessage" height={40} width={75}/>
            </div>
            <div className="app-name">
                <img className="app-name-logo" src="/iMessage.png" alt="iMessage" height={40} width={40}/>
                <span className="app-name-text">
                    iMessage Exploitation Portal
                </span>
                </div>
        </div>
    );
};
export default NavBar;
