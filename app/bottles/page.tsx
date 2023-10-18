import Link from "next/link";

export default function Bottle() {
    return (
        <div className="flex justify-around items-center pt-10">
            <p>A page for all the water bottles in the world.</p>
            <Link className="underline" href="/">Home</Link>
        </div>
    )
}