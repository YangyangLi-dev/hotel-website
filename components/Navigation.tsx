import Link from "next/link";

export default function Navigation(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href={"/cabins"}>Cabins</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/account"}>Guest area</Link>
                </li>
            </ul>
        </nav>
    );
}