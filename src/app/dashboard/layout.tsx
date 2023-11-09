import React from "react";
import Background from "./features/background/Background";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen  ">
      {/* background video to change it in futre */}
      <Background />
      <section className="relative z-10 h-screen w-screen   ">
        {children}
      </section>
    </main>
  );
};

export default Layout;
