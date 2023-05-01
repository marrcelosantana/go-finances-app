import { createContext, ReactNode, useState } from "react";

import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";

import { UserDTO } from "@models/UsetDTO";
import { storageUserCreate } from "@storage/storageUser";

export interface AuthDataProps {
  user: UserDTO;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export const AuthContext = createContext<AuthDataProps>({} as AuthDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function signInWithGoogle() {
    try {
      const { CLIENT_ID } = process.env;
      const { REDIRECT_URI } = process.env;

      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          name: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.picture,
        });

        await storageUserCreate(userInfo);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const userInfo = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName!.givenName!,
          photo: undefined,
        };

        setUser(userInfo);
        await storageUserCreate(userInfo);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithApple }}>
      {children}
    </AuthContext.Provider>
  );
}
