import { Card } from '@/components/ui/card';

interface ChatMessageProps {
    content: string;
    isAI: boolean;
}

export function ChatMessage({ content, isAI }: ChatMessageProps) {
    return (
        <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4`}>
            <Card
                className={`rounded-3xl p-4 max-w-[80%] ${
                    isAI
                        ? 'bg-white text-gray-800 border-[0.5px] border-[#E5E5E5]'
                        : 'bg-black text-white'
                }`}
            >
                <p className="text-sm">{content}</p>
            </Card>
        </div>
    );
}
