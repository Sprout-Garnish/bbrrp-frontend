import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <nav>
      <section className="icon_section">
        <Image src="/vercel.svg" width={50} height={30} layout="fixed" />
      </section>
      <section className="nav_section">
        <Link href="/">
          <a
            onClick={() => alert("알림 보기 화면으로 이동합니다.")}
            className="button"
          >
            <Image src="/alarm.webp" width={30} height={30} layout="fixed" />
          </a>
        </Link>
        <Link href="/">
          <a
            onClick={() => alert("마이 페이지로 이동합니다.")}
            className="button"
          >
            <Image src="/person.png" width={30} height={30} layout="fixed" />
          </a>
        </Link>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        nav {
          display: flex;
          flex-direction: row;
          background-color: grey;
        }
        .icon_section {
          justify-content: flex-start;
          padding-left: 30px;
        }
        .nav_section {
          justify-content: flex-end;
          padding-right: 30px;
        }
        .button {
          margin-left: 20px;
        }
      `}</style>
    </nav>
  );
};

export default Header;
