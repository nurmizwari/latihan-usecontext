import { memo } from "react";

function Dua({ mulaiHitung }) {
  return <div>{mulaiHitung()}</div>; //! dia akan di render terus ketika di klik buton karena tidak pake use Memo dan use Callback
}

//! jadi bagusnya pake use memo dan use callback mereka satu paket

export default memo(Dua);
