import { useState, useCallback, useRef } from 'react';
import { ChatLayout } from '@/components/ChatLayout';
import { AnswerCard } from '@/components/AnswerCard';
import { ContentCard } from '@/components/ContentCard';
import { AskAgainButton } from '@/components/AskAgainButton';
import { ChatFooter } from '@/components/ChatFooter';
import { ChatBox } from '@/components/ChatBox';
import { Card } from '@/components/ui/card';
import PopoutCard from '@/components/PopoutCard';
import { sendChatMessage } from '@/api/api';
interface Message {
    content: string;
    isAI: boolean;
}
export default function Home() {
    const [hasMessageBeenSent, setHasMessageBeenSent] = useState(false);
    const [firstMessage, setFirstMessage] = useState<string | undefined>(undefined);
    const [isPoppedOut, setIsPoppedOut] = useState(true);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = useCallback(
        async (message: string, isAI: boolean) => {
            if (!hasMessageBeenSent) {
                // First message - store it and show ChatBox
                setFirstMessage(message);
                setHasMessageBeenSent(true);
            } else {
                setMessages((prev) => [...prev, { content: message, isAI }]);
                if (!isAI) {
                    setIsLoading(true);
                    try {
                        const response = await sendChatMessage(message);
                        setMessages((prev) => [...prev, { content: response, isAI: true }]);
                    } catch (error) {
                        console.error('Error sending message:', error);
                    } finally {
                        setIsLoading(false);
                    }
                }
            }
        },
        [hasMessageBeenSent],
    );

    const handleAskAgain = useCallback(() => {
        // Focus on the input field
        const inputEl = document.querySelector('input[type="text"]') as HTMLInputElement | null;
        if (inputEl) {
            inputEl.focus();
        }
    }, []);

    const content =
        'Books are portals to other worlds, offering knowledge, escape, and reflection all in the turn of a page. Whether fiction or fact, they expand our minds and stir our soul!';

    const handlePopIn = () => {
        setIsPoppedOut(true);
    };

    return (
        <>
            {isPoppedOut ? (
                <ChatLayout>
                    <div className="flex-1 max-h-screen p-6 overflow-y-auto w-full">
                        <Card className="rounded-[40px] p-5 flex flex-col gap-1 mb-4 w-full">
                            <AnswerCard title="A) Books" setIsPoppedOut={setIsPoppedOut} />
                            <ContentCard
                                content={content}
                                hasMessageBeenSent={hasMessageBeenSent}
                            />
                        </Card>
                        {hasMessageBeenSent ? (
                            <ChatBox
                                initialMessage={firstMessage}
                                messages={messages}
                                isLoading={isLoading}
                                onSendMessage={handleSendMessage}
                            />
                        ) : (
                            <AskAgainButton onClick={handleAskAgain} />
                        )}
                    </div>
                    <ChatFooter onSendMessage={handleSendMessage} />
                </ChatLayout>
            ) : (
                <div className="h-screen w-screen">
                    <PopoutCard handlePopIn={handlePopIn} />
                </div>
            )}
        </>
    );
}
