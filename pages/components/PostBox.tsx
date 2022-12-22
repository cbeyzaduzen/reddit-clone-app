import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "./Avatar";

function PostBox() {
  const { data: session } = useSession();

  return (
    <form className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2">
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Avatar />
        <input
          disabled={!session}
          className="rounded-md flex-1 bg-gray-50 p-2 pl-5 outline-none"
          type="text"
          placeholder={
            session ? "Create a post entering a title!" : "Sign in to post"
          }
        />
        
      </div>
    </form>
  );
}

export default PostBox;
