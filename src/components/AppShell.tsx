"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddressBar from "@/components/AddressBar";
import FloatingActions from "@/components/FloatingActions";
import LanguageWelcomeModal from "@/components/LanguageWelcomeModal";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function ShellContent({ children }: { children: React.ReactNode }) {
  const { showWelcome } = useLanguage();

  return (
    <>
      <LanguageWelcomeModal />
      <div className={showWelcome ? "pointer-events-none select-none blur-sm" : ""}>
        <Header />
        <AddressBar />
        <main>{children}</main>
        <Footer />
      </div>
      <FloatingActions />
    </>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ShellContent>{children}</ShellContent>
    </LanguageProvider>
  );
}
