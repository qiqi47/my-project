import { Camera, Plus } from 'lucide-react';
import { Card } from './ui/card';
import xiao from '../../public/xiao.svg';
import rotate from '../../public/rotate.svg';
import camera from '../../public/camera.svg';
import { Button } from './ui/button';
export default function PopoutCard({ handlePopIn }: { handlePopIn: () => void }) {
    return (
        <div className="flex items-center justify-end min-h-screen bg-gray-100 pr-20">
            <div className="w-[457px] h-[418px] max-w-md p-6 bg-white rounded-[32px] shadow-lg relative overflow-hidden flex flex-col justify-between">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-pink-100/70 -z-10"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="font-bold text-xl">
                        Answers<span className="text-blue-500">Ai</span>
                    </div>
                    <button className="p-1" onClick={() => handlePopIn()}>
                        <img src={xiao} alt="xiao" className="h-4 w-4" />
                    </button>
                </div>

                {/* Solution Card */}
                <Card className="bg-white rounded-2xl p-4 shadow-sm mb-6">
                    <div className="text-gray-500 text-sm mb-2">Solution</div>
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-500 font-semibold">A</span>
                        </div>
                        <span className="text-green-500 font-semibold text-xl">Books</span>
                    </div>
                </Card>

                {/* Why is this the answer button */}
                <div className="flex justify-center mb-8">
                    <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                        <Plus className="h-4 w-4" />
                        Why is this the answer?
                    </button>
                </div>

                {/* Bottom Actions */}
                <div className="flex justify-between items-center">
                    <Button
                        variant="ghost"
                        className="rounded-[50%] w-10 h-10 flex items-center justify-center"
                        size="icon"
                    >
                        <img src={rotate} alt="rotate" className="h-4 w-4" />
                    </Button>

                    <button className="w-16 h-10 rounded-full bg-gray-900 flex items-center justify-center shadow-sm">
                        <img src={camera} alt="camera" className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
