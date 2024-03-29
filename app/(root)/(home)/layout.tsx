import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default HomeLayout;
