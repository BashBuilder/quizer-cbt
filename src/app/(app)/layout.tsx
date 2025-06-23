import Navbar from "@/components/layout/navbar";
import { userStore } from "@/data/constants";
import { cookies } from "next/headers";

// added some comments on this page
// added some comments on this page
// added some comments on this page

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = (await cookies()).get(userStore.token)?.value;

  if (!cookie) {
    window.location.href = "/";
  }

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
