"use client";
import { useState } from "react";

export default function Input() {
    const [depth, setDepth] = useState("14");
    const [option, setOption] = useState("pgn");
    const [input, setInput] = useState("");
    let disabled = true;
    let status = "";
    if (input.trim() === "") {
        disabled = true;
        status = "bg-gray-400";
    } else {
        disabled = false;
        status = "bg-green-400";
    }
    return (
        <div className="max-w-full rounded-xl shadow-lg p-6 bg-[#333]">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">
                Chess Analysis
            </h1>
            <form className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="input"
                            className="block text-xl font-medium mb-3"
                        >
                            Game details
                        </label>
                        <div className="flex w-full">
                            <input
                                type="text"
                                className="rounded-s-md bg-gray-600 w-full px-2 text-lg focus:outline-none focus:border-2 focus:border-gray-300"
                                id="input"
                                value={input}
                                required
                                onChange={(e) => {
                                    setInput(e.target.value);
                                }}
                            />
                            <select
                                name="options"
                                required
                                className="inline w-[20%]  border-gray-300 shadow-sm focus:border-gray-500 focus:ring-blue-500 p-3 text-lg bg-gray-800"
                                value={option}
                                onChange={(e) => {
                                    setOption(e.target.value);
                                }}
                            >
                                <option value="pgn">PGN</option>
                                <option value="link">Game Link</option>
                            </select>
                            <button
                                type="submit"
                                disabled={disabled}
                                title="Validate data"
                                className={`${status} aspect-square inline w-[10%] rounded-e-md`}
                            >
                                ✔️
                            </button>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="depth"
                            className="block text-xl font-medium  mb-3"
                        >
                            Analysis Depth
                        </label>
                        <select
                            name="depth"
                            id="depth"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-blue-500 p-3 bg-gray-600 mb-5 text-lg"
                            value={depth}
                            onChange={(e) => {
                                setDepth(e.target.value);
                            }}
                        >
                            <option value="14">Depth 14</option>
                            <option value="16">Depth 16</option>
                            <option value="18">Depth 18</option>
                            <option value="20">Depth 20</option>
                            <option value="22">Depth 22</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-[#81b64c] hover:[#5d9948] transform duration-300 focus:scale-105 transition-colors"
                >
                    Analyze Game
                </button>
                <div className="min-h-min">
                    <div className="text-center "></div>
                </div>
            </form>
        </div>
    );
}
