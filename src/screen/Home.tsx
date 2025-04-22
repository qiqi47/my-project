import { ChatLayout } from '@/components/ChatLayout';
import { AnswerCard } from '@/components/AnswerCard';
import { ContentCard } from '@/components/ContentCard';
import { AskAgainButton } from '@/components/AskAgainButton';
import { ChatFooter } from '@/components/ChatFooter';
import { Card } from '@/components/ui/card';

export default function Home() {
    const handleAskAgain = () => {
        // Handle ask again logic
        console.log('Ask again clicked');
    };

    const content =
        'Books are portals to other worlds, offering knowledge, escape, and reflection all in the turn of a page. Whether fiction or fact, they expand our minds and stir our soul!';

    return (
        <ChatLayout>
            <div className="flex-1 overflow-auto">
                <Card className="rounded-[40px] p-5">
                    <AnswerCard title="A) Books" />
                    <ContentCard content={content} />
                </Card>
                <AskAgainButton onClick={handleAskAgain} />
            </div>
            <ChatFooter />
        </ChatLayout>
    );
}
