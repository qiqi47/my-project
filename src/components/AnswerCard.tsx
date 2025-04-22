import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera } from 'lucide-react';

interface AnswerCardProps {
    title: string;
}

export function AnswerCard({ title }: AnswerCardProps) {
    return (
        <Card className="mb-4 rounded-3xl overflow-hidden border-0 shadow-sm relative">
            <div
                className="absolute inset-0 rounded-3xl"
                style={{
                    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                }}
            ></div>
            <div className="p-6 bg-white rounded-3xl relative">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Answer</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-pink-50 text-pink-500"
                    >
                        <Camera className="h-4 w-4" />
                    </Button>
                </div>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
            </div>
        </Card>
    );
}
