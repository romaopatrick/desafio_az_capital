import { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
    return <div className="flex flex-col justify-center overflow-hidden bg-white h-[36%] shadow-md w-[28%] min-w-[300px] rounded-md">
        {children}
    </div>
} 