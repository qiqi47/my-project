import { useState, useCallback, useRef } from 'react';
import { ChatLayout } from '@/components/ChatLayout';
import { AnswerCard } from '@/components/AnswerCard';
import { ContentCard } from '@/components/ContentCard';
import { AskAgainButton } from '@/components/AskAgainButton';
import { ChatFooter } from '@/components/ChatFooter';
import { ChatBox } from '@/components/ChatBox';
import { Card } from '@/components/ui/card';

export default function Home() {
    const [hasMessageBeenSent, setHasMessageBeenSent] = useState(false);

    const handleSendMessage = useCallback((message: string) => {
        // Set that a message has been sent
        setHasMessageBeenSent(true);

        // Access the sendMessage method exposed by ChatBox
        const globalWindow = window as any;
        if (typeof globalWindow.sendMessage === 'function') {
            globalWindow.sendMessage(message);
        }
    }, []);

    const content =
        'Books are portals to other worlds, offering knowledge, escape, and reflection all in the turn of a page. Whether fiction or fact, they expand our minds and stir our soul!';

    return (
        <ChatLayout>
            <div className="flex-1 max-h-screen p-6 overflow-y-auto">
                <Card className="rounded-[40px] p-5 flex flex-col gap-1 mb-4">
                    <AnswerCard title="A) Books" />
                    <ContentCard content={content} hasMessageBeenSent={hasMessageBeenSent} />
                </Card>
                {hasMessageBeenSent && <ChatBox />}
                {!hasMessageBeenSent && <AskAgainButton />}
            </div>
            <ChatFooter onSendMessage={handleSendMessage} />
        </ChatLayout>
    );
}
