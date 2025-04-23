import { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '@/api/api';
import { ChatMessage } from '@/components/ChatMessage';
import { Card } from '@/components/ui/card';

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
    const initialMessageProcessedRef = useRef(false);

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

    // Process initial message if provided
    useEffect(() => {
        if (initialMessage && !initialMessageProcessedRef.current) {
            initialMessageProcessedRef.current = true;
            addMessage(initialMessage, false);
        }
    }, [initialMessage]);

    // Method to expose to parent component
    useEffect(() => {
        // Add to global window object for demo purposes
        const globalWindow = window as any;
        globalWindow.sendMessage = (message: string) => {
            // Skip if this is the initial message already processed
            if (initialMessage === message && initialMessageProcessedRef.current) {
                return;
            }
            addMessage(message, false);
        };

        return () => {
            delete globalWindow.sendMessage;
        };
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
