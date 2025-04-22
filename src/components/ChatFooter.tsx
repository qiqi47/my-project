import { Button } from '@/components/ui/button';
import { Camera, Send, ArrowUp, Settings } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export function ChatFooter() {
    const [activeTab, setActiveTab] = useState('ask');
    return (
        <div className="mt-auto bg-white rounded-t-3xl p-7">
            <div className="flex items-center bg-[#F1F1F1] rounded-full p-2 mb-4">
                <span className="ml-2 text-gray-600">Chat with us</span>
                <div className="ml-auto bg-gray-200 rounded-full p-1">
                    <ArrowUp className="h-4 w-4 text-gray-500" />
                </div>
            </div>

            <div className="flex justify-between items-center h-12">
                <div className="w-24"></div> {/* Spacer for alignment */}
                <Tabs
                    defaultValue="ask"
                    className="flex-1 flex justify-center"
                    value={activeTab}
                    onValueChange={setActiveTab}
                >
                    <TabsList className="grid w-[200px] grid-cols-2 rounded-xl h-12 p-1 gap-1">
                        <TabsTrigger
                            value="ask"
                            className={`${
                                activeTab === 'ask' ? '!bg-black text-white' : ''
                            } flex items-center justify-center rounded-2xl`}
                        >
                            <Camera className="mr-2 h-4 w-4" /> Ask
                        </TabsTrigger>
                        <TabsTrigger
                            value="chats"
                            className={`${
                                activeTab === 'chats' ? '!bg-black text-white' : ''
                            } flex items-center justify-center rounded-2xl`}
                        >
                            <Send className="mr-2 h-4 w-4" /> Chats
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <Button
                    variant="ghost"
                    className="rounded-[50%] w-12 h-12 flex items-center justify-center"
                    size="icon"
                >
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
