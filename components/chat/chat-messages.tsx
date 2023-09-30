"use client";

import { Member } from "@prisma/client";

interface ChatMessagesProps {
    name: string;
    member: Member;
    chatId: string;
    apiUrl: string;
}

export const ChatMessages = () => {
    return (
        <div>
            Chat Messages
        </div>
    )
}