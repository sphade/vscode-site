import React from "react";
import SearchLayout from "../layout/SearchLayout";

function Chat() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="capitalize text-gray-600 font-bold text-lg">No Search</h1>
    </div>
  );
}

Chat.getLayout = function getLayout(page) {
  return( <SearchLayout>{page}</SearchLayout>);
};

export default Chat;
