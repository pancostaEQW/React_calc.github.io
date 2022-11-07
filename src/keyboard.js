import React, { useState, useEffect } from "react";

useEffect(() => {
    window.addEventListener("keydown", detectKeyDown, true);
    return () => {
      window.removeEventListener("keydown", detectKeyDown, true);
    };
  }, []);

 const detectKeyDown = (e) => {
   console.log(e.key)
  }

  export default detectKeyDown;

