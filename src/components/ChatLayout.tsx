import { ReactNode } from 'react';
interface ChatLayoutProps {
    children: ReactNode;
}

export function ChatLayout({ children }: ChatLayoutProps) {
    return (
        <div className="min-h-screen bg-white grid grid-cols-3">
            {/* Left side - empty area */}
            <div className="col-span-2 p-4">
                <div className="flex-1 bg-[#F6F6F6] h-full rounded-xl"></div>
            </div>

            {/* Right side - chat interface */}
            <div className="border-[#C0C0C0] border-[0.5px] m-4 rounded-lg  overflow-hidden">
                <div className="col-span-1 bg-[#F6F6F6] flex flex-col h-full overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}
