import { Button } from '@/components/ui/button';
import { Camera, Send, ArrowUp, Settings } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export function ChatFooter() {
    const [activeTab, setActiveTab] = useState('ask');
    return (
        <div className="mt-auto bg-white rounded-t-3xl p-4 max-h-36 gap-4 flex flex-col">
            <div className="flex items-center bg-[#F1F1F1] rounded-full p-1.5 mb-2 h-14">
                <span className="ml-2 text-gray-600 text-sm">Chat with us</span>
                <div className="ml-auto bg-gray-200 rounded-full p-1">
                    <ArrowUp className="h-6 w-6 text-gray-500" />
                </div>
            </div>

            <div className="flex items-center h-10">
                <div className="w-10"></div> {/* Spacer to balance the layout */}
                <div className="flex-1 flex justify-center">
                    <Tabs
                        defaultValue="ask"
                        className="flex justify-center"
                        value={activeTab}
                        onValueChange={setActiveTab}
                    >
                        <TabsList className="grid w-[180px] grid-cols-2 rounded-xl h-10 p-1 gap-1">
                            <TabsTrigger
                                value="ask"
                                className={`${
                                    activeTab === 'ask' ? '!bg-black text-white' : ''
                                } flex items-center justify-center rounded-2xl text-sm`}
                            >
                                <Camera className="mr-1 h-3 w-3" /> Ask
                            </TabsTrigger>
                            <TabsTrigger
                                value="chats"
                                className={`${
                                    activeTab === 'chats' ? '!bg-black text-white' : ''
                                } flex items-center justify-center rounded-2xl text-sm`}
                            >
                                <Send className="mr-1 h-3 w-3" /> Chats
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <Button
                    variant="ghost"
                    className="rounded-[50%] w-10 h-10 flex items-center justify-center"
                    size="icon"
                >
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
