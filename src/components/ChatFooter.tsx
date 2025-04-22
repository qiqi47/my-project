import { Button } from '@/components/ui/button';
import { Camera, Send, ArrowUp } from 'lucide-react';

export function ChatFooter() {
    return (
        <div className="mt-auto">
            <div className="flex items-center bg-gray-100 rounded-full p-2 mb-4">
                <span className="ml-2 text-gray-600">Chat with us</span>
                <div className="ml-auto bg-gray-200 rounded-full p-1">
                    <ArrowUp className="h-4 w-4 text-gray-500" />
                </div>
            </div>

            <div className="flex justify-between">
                <Button
                    variant="outline"
                    className="rounded-full bg-gray-900 text-white hover:bg-black"
                >
                    <Camera className="mr-2 h-4 w-4" /> Ask
                </Button>
                <Button variant="outline" className="rounded-full">
                    <Send className="mr-2 h-4 w-4" /> Chats
                </Button>
                <Button variant="outline" className="rounded-full p-2">
                    <div className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        ?
                    </div>
                </Button>
            </div>
        </div>
    );
}
