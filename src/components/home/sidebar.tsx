import { BBRRPClientContext } from "@modules/client";
import { useRouter } from "next/router";
import React, { useContext } from "react";

interface propsType {
  name: string;
}

const SidebarButton = (props: propsType) => {
  const name = props.name;
  return (
    <a className="cursor-pointer">
      <div className="Georgia text-orange text-xl bg-white px-3 py-8">
        {name}
      </div>
    </a>
  );
};

const Sidebar = () => {
  const router = useRouter();
  const { credentials } = useContext(BBRRPClientContext);
  /**
   * @description 아래 함수는 개발 목적으로 사용하는 함수입니다.
   *              마이페이지로 편하게 navigate하기 위함이니 나중에는 마이페이지 버튼을 따로 만들어서 아래 함수의 기능을 그 버튼으로 옮겨주시기 바랍니다.
   *
   * @todo 마이페이지 버튼을 따로 만들어서 아래 함수의 기능을 그 버튼으로 옮기기
   */
  const goToMyPage = () => {
    if (credentials?.id) {
      router.push(`/users/${credentials.id}`);
    } else {
      alert("로그인이 필요합니다.");
    }
  };
  return (
    <div
      onClick={goToMyPage}
      className="fixed right-5 top-1/3 z-20  bg-white px-1 py-1 rounded-lg text-center drop-shadow-2xl"
    >
      <SidebarButton name="table" />
      <hr className="border-khaki opacity-30" />
      <SidebarButton name="review" />
      <hr className="border-khaki opacity-30" />
      <SidebarButton name="location" />
    </div>
  );
};

export default Sidebar;
