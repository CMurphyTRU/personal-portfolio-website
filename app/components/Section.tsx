import { ReactNode } from "react";

function Section({ children }: { children: ReactNode}) {
    return (
        <div className="py-0 max-w-3xl mx-auto px-6">
            {children}
        </div>
    )
}
export default Section;