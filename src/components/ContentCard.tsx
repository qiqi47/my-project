import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ContentCardProps {
    content: string;
}

export function ContentCard({ content }: ContentCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="rounded-3xl p-6">
            <p className="text-gray-800">{content}</p>
            <div className="flex justify-center mt-4">
                <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full text-gray-500"
                    onClick={() => setExpanded(!expanded)}
                >
                    See More{' '}
                    <ArrowUp
                        className={`ml-1 h-4 w-4 transition-transform ${
                            expanded ? 'rotate-180' : ''
                        }`}
                    />
                </Button>
            </div>
        </Card>
    );
}
