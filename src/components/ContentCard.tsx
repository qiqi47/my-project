import { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import cameraBk from '../../public/cameraBk.svg';
interface ContentCardProps {
    content: string;
    hasMessageBeenSent: boolean;
}

export function ContentCard({ content, hasMessageBeenSent }: ContentCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="rounded-3xl p-6 border-1 gap-0 relative">
            {hasMessageBeenSent ? (
                <div className="relative w-full flex items-center justify-center gap-2 h-4">
                    <img src={cameraBk} alt="camera" className="h-6 w-6" />
                    Ask again
                </div>
            ) : (
                <div className="relative w-full">
                    <div className={expanded ? '' : 'relative'}>
                        <p className={`text-gray-800 ${!expanded ? 'line-clamp-2' : ''}`}>
                            {content}
                        </p>
                    </div>
                    {!expanded && (
                        <div className="absolute bottom-[60px] left-0 right-0 h-[40px]"></div>
                    )}
                    <div className="flex justify-center mt-4">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="rounded-full text-gray-500"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? 'See Less' : 'See More'}{' '}
                            <ChevronUp
                                className={`ml-1 h-4 w-4 transition-transform ${
                                    expanded ? '' : 'rotate-180'
                                }`}
                            />
                        </Button>
                    </div>
                </div>
            )}
        </Card>
    );
}
