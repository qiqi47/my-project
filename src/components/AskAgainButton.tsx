import { Button } from '@/components/ui/button';

interface AskAgainButtonProps {
    onClick?: () => void;
}

export function AskAgainButton({ onClick }: AskAgainButtonProps) {
    return (
        <div className="flex justify-center mb-8">
            <Button className="rounded-full bg-gray-900 hover:bg-black" onClick={onClick}>
                Ask Again
            </Button>
        </div>
    );
}
