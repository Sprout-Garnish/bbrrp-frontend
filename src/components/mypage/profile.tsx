import React from "react";
import Image from "next/image";
import { UserQuery } from "@modules/client/graphql/generated/schema";

interface PProfile {
  user: UserQuery["user"];
}

const Profile: React.FC<PProfile> = ({ user }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-36 h-36">
          <Image
            className="rounded-full"
            src="/person.png"
            width={120}
            height={120}
          />
        </div>
        <div className="flex-col px-10 py-2 justify-center">
          <div className="font-semibold text-2xl py-3 ">
            {user?.name} / {user?.nickname}
          </div>
          <button className="border-2 border-whitesmoke font-medium shadow-lg grow px-9 py-2 rounded-3xl">
            아이디/비밀번호 변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
