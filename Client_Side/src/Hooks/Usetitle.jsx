import React, { useEffect } from "react";

const Usetitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Monarch`;
  }, [title]);
};

export default Usetitle;
