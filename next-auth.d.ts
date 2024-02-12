import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  username: string;

  bio: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  receivedMessages: {
    isPublic: boolean;
    content: string;
    senderId: string;
    receiverId: string;
  } 
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;  
  }
}
