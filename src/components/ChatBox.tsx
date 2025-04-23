import { useRef, useEffect } from 'react';
import { ChatMessage } from '@/components/ChatMessage';
import { Card } from '@/components/ui/card';

interface Message {
    content: string;
    isAI: boolean;
}

interface ChatBoxProps {
    initialMessage?: string;
    messages: Message[];
    isLoading: boolean;
    onSendMessage: (message: string, isAI: boolean) => void;
}

export function ChatBox({ initialMessage, messages, isLoading, onSendMessage }: ChatBoxProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const initialMessageProcessedRef = useRef(false);

    // Process initial message if provided
    useEffect(() => {
        if (initialMessage && !initialMessageProcessedRef.current) {
            initialMessageProcessedRef.current = true;
            onSendMessage(initialMessage, false);
        }
    }, [initialMessage]);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Card className="rounded-[32px] p-4 flex flex-col h-[300px] overflow-auto mb-4">
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
        </Card>
    );
}
