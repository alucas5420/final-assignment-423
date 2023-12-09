import React from "react"
import '@/styles/globals.css';
import "semantic-ui-css/semantic.css";
import { Menu, Icon } from "semantic-ui-react";
import Link from "next/link"
import {AppProvider} from "@/useHooks/useAppState"
import Line from "@/components/Line";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <nav className="mainNav">
      <ul>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/favorites">Favorites</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
    <br></br>
    <br></br>
    <Component {...pageProps} />
    <br></br>
    <Line></Line>
    </AppProvider>
  );
}