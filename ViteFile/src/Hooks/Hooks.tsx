import { useQuery } from "@tanstack/react-query";
import { getAccountOwner } from "../Api/authApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

 const userHook = () => {
  
  // const { data: singleUser, isLoading } = useQuery({
  //   queryKey: ["singleUser"],
  //   queryFn: () => getAccountOwner(userID),
  // refetchInterval: 5000,
  // });
  // console.log(userID)
  // return { singleUser, isLoading };

  const [state, setState]: any = useState({});
  let token:string = useSelector((state: any) => state.user);
  
  useEffect(() => {
    if (token) {
      setState(token)
    }
  }, []);


  const { data, isLoading } = useQuery({
    queryKey: ["userData", state.id],
    queryFn: () =>
      getAccountOwner(state.id).then((res) => {
        return res.data;
      }),
    refetchInterval: 5000,
  });

  return { data, isLoading };
};

export default userHook;
