import {useState ,useEffect} from 'react';

const useGetData=()=>{
  const[mydata,setData]=useState([]);
  useEffect(()=>{
    fetch("https://us-central1-gndx-cv.cloudfunctions.net/me")
      .then(response=>response.json())
      .then(data=>setData(data));
  },[]);

  return mydata;
}

export default useGetData;