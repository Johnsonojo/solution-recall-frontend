import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import MainNavbar from "../../../components/MainNavbar";
import postAPI from "../../../redux/api/postAPI";
import queryKeys from "../../../redux/api/queryKeys";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const allPostsForUser = useQuery([queryKeys.allPosts], postAPI.getAllPosts, {
    onSuccess: (response) => {
      if (!response.error) {
        queryClient.setQueryData(
          "allPosts",
          () => response?.data.paginatedUserPosts
        );
        setAllPosts(response?.data.paginatedUserPosts);
      }
    },
  });

  const { error, isError, isLoading } = allPostsForUser;
  console.log("allPosts", allPosts);

  return (
    <div>
      <MainNavbar />
      <h3 className="mt-3">All Posts</h3>
      <div className="col-sm-12 col-md-6 col-lg-4 container">
        {isLoading && <div>Loading...</div>}
        {isError && <div>{error}</div>}
      </div>
    </div>
  );
};

export default AllPosts;
