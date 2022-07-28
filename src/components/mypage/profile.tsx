import React from "react";

const Profile = (props) => {
  return (
    <div>
      <div>
        {props.data.user.name} / {props.data.user.nickname}
      </div>
      <button>아이디/비밀번호 변경</button>
    </div>
  );
};

export default Profile;
