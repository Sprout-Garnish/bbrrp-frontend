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
      <section className="search_section">
        <form id="search" onSubmit={() => alert("검색하기")}>
          <input id="name" type="text" required />
          <button type="submit">
            <Image src="/search.png" width={30} height={30} layout="fixed" />
          </button>
        </form>
      </section>
      <section className="nav_section">
        <Link href="/">
          <a onClick={() => console.log("알림")} className="button">
            알림
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => console.log("환경설정")} className="button">
            환경설정
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
          flex: 1;
        }
        .search_section {
          flex: 5;
          justify-content: flex-end;
          align-items: center;
          padding-right: 30px;
        }
        .nav_section {
          justify-content: flex-end;
          padding-right: 30px;
          flex: 4;
        }
        .button {
          margin-left: 20px;
        }
        #search {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Header;
