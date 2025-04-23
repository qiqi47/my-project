import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import camera from '../../public/1.svg';

interface AnswerCardProps {
    title: string;
    setIsPoppedOut: (isPoppedOut: boolean) => void;
}

export function AnswerCard({ title, setIsPoppedOut }: AnswerCardProps) {
    const handlePopOut = () => {
        setIsPoppedOut(false);
    };

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
                        <span className="text-gray-500 text-sm">Solution</span>
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    </div>
                    <Button
                        variant="ghost"
                        className="rounded-[50%] w-8 h-8 transition-all duration-300 hover:w-24 hover:rounded-full flex items-center justify-center gap-2 group"
                        size="icon"
                        onClick={handlePopOut}
                    >
                        <img src={camera} alt="camera" className="w-4 h-3" />
                        <span className="hidden group-hover:inline whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 bg-gradient-to-r from-[#C330FD] to-[#FF6C2D] text-transparent bg-clip-text">
                            pop out
                        </span>
                    </Button>
                </div>
            </div>
        </Card>
    );
}
