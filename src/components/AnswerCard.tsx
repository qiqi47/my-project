import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera } from 'lucide-react';

interface AnswerCardProps {
    title: string;
}

export function AnswerCard({ title }: AnswerCardProps) {
    return (
        <Card
            className="mb-4 rounded-3xl overflow-hidden relative"
            style={{
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.1)',
                border: '1px solid transparent',
                backgroundImage:
                    'linear-gradient(white, white), linear-gradient(0deg, #E46B00 0%, #B300C7 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
            }}
        >
            <div className="px-6 relative">
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm">Answer</span>
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-pink-50 text-pink-500"
                    >
                        <Camera className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
