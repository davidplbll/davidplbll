import {useState ,useEffect} from 'react';

const useGetData=()=>{
  const[mydata,setData]=useState([]);
  useEffect(()=>{
    fetch("https://mydata-31163.firebaseio.com/data.json")
      .then(response=>response.json())
      .then(data=>{
        for(let key of Object.keys(data))
        setData(data[key])});
  },[]);

  return mydata;
}

export default useGetData;