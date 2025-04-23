import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import settings from '../../public/setting.svg';
import camera from '../../public/camera.svg';
import chat from '../../public/chat.svg';
import chatWT from '../../public/chatWt.svg';
import cameraBK from '../../public/cameraBk.svg';
interface ChatFooterProps {
    onSendMessage?: (message: string, isAI: boolean) => void;
}

export function ChatFooter({ onSendMessage }: ChatFooterProps) {
    const [activeTab, setActiveTab] = useState('ask');
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSend = () => {
        if (inputValue.trim() && onSendMessage) {
            onSendMessage(inputValue.trim(), false);
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="mt-auto bg-white rounded-t-3xl p-4 max-h-36 gap-4 flex flex-col">
            <div className="flex items-center bg-[#F1F1F1] rounded-full p-1.5 mb-2 h-14">
                <input
                    type="text"
                    placeholder="Chat with us"
                    className="ml-2 text-gray-600 text-sm bg-transparent border-none outline-none flex-1"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div
                    className={`${
                        isFocused ? 'bg-black' : 'bg-[#7C7C83]'
                    } rounded-full p-1 transition-colors cursor-pointer`}
                    onClick={handleSend}
                >
                    <ArrowUp className={`h-6 w-6 text-white`} />
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
                        <TabsList className="grid w-[180px] grid-cols-2 rounded-xl h-12 p-1 gap-1">
                            <TabsTrigger
                                value="ask"
                                className={`${
                                    activeTab === 'ask' ? '!bg-black text-white' : ''
                                } flex items-center justify-center rounded-2xl text-sm`}
                            >
                                {activeTab === 'ask' ? (
                                    <img src={camera} alt="camera" className="mr-1 h-4 w-4" />
                                ) : (
                                    <img src={cameraBK} alt="camera" className="mr-1 h-4 w-4" />
                                )}
                                Ask
                            </TabsTrigger>
                            <TabsTrigger
                                value="chats"
                                className={`${
                                    activeTab === 'chats' ? '!bg-black text-white' : ''
                                } flex items-center justify-center rounded-2xl text-sm`}
                            >
                                {activeTab === 'ask' ? (
                                    <img src={chat} alt="chat" className=" h-4 w-4" />
                                ) : (
                                    <img src={chatWT} alt="chat" className=" h-4 w-4" />
                                )}{' '}
                                Chats
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <Button
                    variant="ghost"
                    className="rounded-[50%] w-10 h-10 flex items-center justify-center"
                    size="icon"
                >
                    <img src={settings} alt="settings" className="h-8 w-8" />
                </Button>
            </div>
        </div>
    );
}
