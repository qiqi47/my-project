const API_URL = 'https://flask-ai-chat.replit.app/api/chat';
const API_KEY = '*018n(~gPC6x$c4';

export async function sendChatMessage(message: string): Promise<string> {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data.response || 'Sorry, I could not process your request.';
    } catch (error) {
        console.error('Error calling chat API:', error);
        return 'Sorry, there was an error processing your request.';
    }
}
