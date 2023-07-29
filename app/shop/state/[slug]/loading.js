import React from 'react'
const wait = new Promise((res,req) => setTimeout(res,sec*1000));
const loading =async () => {

    // await wait(4);
  return (
    <div>loading</div>
  )
}

export default loading