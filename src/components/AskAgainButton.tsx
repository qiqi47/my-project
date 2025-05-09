import { Button } from '@/components/ui/button';

interface AskAgainButtonProps {
    onClick?: () => void;
}

export function AskAgainButton({ onClick }: AskAgainButtonProps) {
    return (
        <div className="flex justify-center mt-4">
            <Button
                className="rounded-full bg-gray-900 hover:bg-black shadow-[0px_4px_16.9px_0px_#0000001A]"
                onClick={onClick}
            >
                Ask Again
            </Button>
        </div>
    );
}
