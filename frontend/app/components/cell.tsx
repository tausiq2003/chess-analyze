import Image from "next/image";
import { pictures } from "../lib/storage";

export default function Cell({ id, value }: { id: number; value?: string }) {
    const rem = (id - 1) % 8;
    const quo = Math.floor((id - 1) / 8);
    const color =
        (rem % 2 === 0 && quo % 2 === 0) || (rem % 2 !== 0 && quo % 2 !== 0)
            ? "bg-light" // lighter squares
            : "bg-dark"; // darker squares

    let srcImg = "";
    for (const key in pictures) {
        if (key === value) {
            srcImg = pictures[key as keyof typeof pictures];
        }
    }

    return (
        <div className={`aspect-square relative ${color}`}>
            {srcImg && (
                <div className="absolute inset-0 p-1">
                    <Image
                        src={srcImg}
                        alt={`Chess piece ${value}`}
                        fill
                        className="object-contain p-1"
                        draggable="false"
                        priority
                    />
                </div>
            )}
        </div>
    );
}
