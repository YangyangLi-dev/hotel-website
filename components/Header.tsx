import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header(){
    return (
        <header>
            <div>
                <Logo/>
                <Navigation/>
            </div>
        </header>
    );
}