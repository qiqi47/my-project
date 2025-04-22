import { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '@/lib/api';
import { ChatMessage } from '@/components/ChatMessage';

interface Message {
    content: string;
    isAI: boolean;
}

interface ChatBoxProps {
    initialMessage?: string;
}

export function ChatBox({ initialMessage }: ChatBoxProps = {}) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const addMessage = async (content: string, isAI: boolean) => {
        setMessages((prev) => [...prev, { content, isAI }]);

        if (!isAI) {
            setIsLoading(true);
            try {
                const response = await sendChatMessage(content);
                setMessages((prev) => [...prev, { content: response, isAI: true }]);
            } catch (error) {
                console.error('Error sending message:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    // Sample message for the initial UI
    useEffect(() => {
        addMessage('tell me about books', false);
    }, []);

    // Method to expose to parent component
    useEffect(() => {
        // Add to global window object for demo purposes
        const globalWindow = window as any;
        globalWindow.sendMessage = (message: string) => addMessage(message, false);

        return () => {
            delete globalWindow.sendMessage;
        };
    }, []);

    return (
        <div className="flex flex-col h-full overflow-auto">
            {messages.map((message, index) => (
                <ChatMessage key={index} content={message.content} isAI={message.isAI} />
            ))}
            {isLoading && (
                <div className="flex justify-start mb-4">
                    <div className="rounded-3xl p-4 bg-white border-[0.5px] border-[#E5E5E5]">
                        <p className="text-sm">Thinking...</p>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
}
