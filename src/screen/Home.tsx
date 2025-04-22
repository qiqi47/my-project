import { useState } from 'react';
import { Camera, Send, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function App() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 grid grid-cols-3">
            {/* Left side - empty area */}
            <div className="bg-gray-100 col-span-2"></div>

            {/* Right side - chat interface */}
            <div className="col-span-1 bg-white p-6 flex flex-col h-screen">
                <div className="flex-1 overflow-auto">
                    {/* Answer card with gradient border */}
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
                            <h2 className="text-2xl font-bold mb-2">A) Books</h2>
                        </div>
                    </Card>

                    {/* Text content card */}
                    <Card className="mb-4 rounded-3xl p-6">
                        <p className="text-gray-800">
                            Books are portals to other worlds, offering knowledge, escape, and
                            reflection all in the turn of a page. Whether fiction or fact, they
                            expand our minds and stir our soul!
                        </p>
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

                    {/* Ask Again button */}
                    <div className="flex justify-center mb-8">
                        <Button className="rounded-full bg-gray-900 hover:bg-black">
                            Ask Again
                        </Button>
                    </div>
                </div>

                {/* Chat footer */}
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
            </div>
        </div>
    );
}
