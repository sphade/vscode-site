import React from "react";
import { useRouter } from "next/router";
function subPage() {
    const router = useRouter();
    const { subForumPage } = router.query;
  return (
    <div>
      <h1 className='text-2xl text-green-800 font-black'>title: {subForumPage}</h1>
    </div>
  );
}

export default subPage;
