import type { Metadata } from "next";
import { Poppins, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CustomCursor } from "./components/CustomCursor";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const libre = Libre_Baskerville({
	variable: "--font-libre",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Portfolio | Christina Perera",
	description: "UI/UX designer and front-end web developer portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${poppins.variable} ${libre.variable} antialiased`}>
				<Providers>
					<CustomCursor />
					{children}
				</Providers>
			</body>
		</html>
	);
}
