"use client";
import Image from "next/image";
import { pictures } from "../lib/storage";

export default function Cell({ id, value }: { id: number; value?: string }) {
    const rem = (id - 1) % 8;
    const quo = Math.floor((id - 1) / 8);

    // Calculate the color directly based on id
    const color =
        (rem % 2 === 0 && quo % 2 === 0) || (rem % 2 !== 0 && quo % 2 !== 0)
            ? "bg-light"
            : "bg-dark";
    let srcImg = "";
    for (const key in pictures) {
        if (key === value) {
            srcImg = pictures[key];
        }
    }

    return (
        <div
            className={`w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center ${color}`}
        >
            {srcImg !== "" ? (
                <Image
                    src={srcImg}
                    alt="asdf"
                    width={20}
                    height={20}
                    className="h-full w-full"
                />
            ) : (
                <div></div>
            )}
        </div>
    );
}
