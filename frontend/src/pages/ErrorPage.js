import React from "react";

function ErrorPage() {
  return (
    <main className="custom-width top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col gap-10">
      <h1 className="text-[24px] font-bold text-gray_300">An error accured</h1>
      <p className="text-[18px] font-semibold text-gray_500">
        Could not find this page
      </p>
    </main>
  );
}

export default ErrorPage;
