import Board from "./board";
export default function BoardContainer() {
    const players = {
        white: "Anonymous",
        black: "Anonymous",
        whiteElo: "?",
        blackElo: "?",
    };
    const evaluation = 0.0;

    return (
        <div className="w-full lg:w-[650px] max-lg:w-full  rounded-lg shadow-lg p-4 space-y-2 bg-[#333]">
            {/* Black Player Info */}
            <div className="inline-flex items-center gap-2 rounded p-2 bg-gray-700">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">♚</span>
                </div>
                <p className="font-semibold  text-base">Anonymous(?)</p>
            </div>

            {/* Board and Eval Bar Container */}
            <div className="flex gap-2">
                {/* Evaluation Bar */}
                <div className="flex flex-col">
                    <div className="w-6 h-full bg-neutral-200 overflow-hidden relative">
                        <div
                            className="absolute top-0 w-full bg-black transition-all duration-300"
                            style={{ height: "50%" }}
                        />
                        <div
                            className="absolute bottom-0 w-full bg-white transition-all duration-300"
                            style={{ height: "50%" }}
                        />
                    </div>
                    <span className="text-md mt-1 -ml-1text-white">
                        {evaluation > 0 ? "+" : ""}
                        {evaluation.toFixed(1)}
                    </span>
                </div>

                {/* Board Container */}
                <div className="flex-1 h-full">
                    <Board />
                </div>
            </div>

            {/* White Player Info */}
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded p-2">
                <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-800 text-xl">♔</span>
                </div>
                <p className="font-semibold text-gray-900 text-base">
                    Anonymous(?)
                </p>
            </div>
        </div>
    );
}
