import { ReactNode } from 'react';

interface ChatLayoutProps {
    children: ReactNode;
}

export function ChatLayout({ children }: ChatLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 grid grid-cols-3">
            {/* Left side - empty area */}
            <div className="bg-gray-100 col-span-2"></div>

            {/* Right side - chat interface */}
            <div className="col-span-1 bg-white p-6 flex flex-col h-screen">{children}</div>
        </div>
    );
}
