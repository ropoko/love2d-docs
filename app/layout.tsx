import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";

export const metadata = {
	title: "Love2D Docs",
	description: "Documentation for Love2D",
};

export default async function MyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<body>
				<Layout
					navbar={<Navbar logo={<b>Love2D Docs</b>} />}
					pageMap={await getPageMap()}
					sidebar={{ autoCollapse: true }}
					docsRepositoryBase="https://github.com/ropoko/love2d-docs"
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
