import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import MainNavbar from "../../components/MainNavbar";
import PostCard from "../../components/PostCard";
import searchAPI from "../../redux/api/searchAPI";
import "./style.scss";

const SearchPost = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const queryClient = useQueryClient();
  const { error, isError, isLoading, refetch } = useQuery(
    ["searchedKeyword", searchTerm],
    () => searchAPI.searchKeyword(searchTerm),
    {
      onSuccess: (response) => {
        if (!response.error) {
          queryClient.setQueryData("searchedKeyword", () => response?.data);
          setAllPosts(response?.userPostsResult);
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const renderSearchPosts = () => {
    return (
      <div className="container">
        {isError ? (
          <div className="row mt-5">
            <div className="text-center">
              <h4>No post found</h4>
            </div>
          </div>
        ) : (
          <div className="row g-6 mt-5">
            {allPosts?.map((post) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={post?.id}>
                {isError && <div>{error}</div>}
                <PostCard eachProblem={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <MainNavbar />
      <h3 className="mt-4 mb-4">Recall a solution</h3>

      <div className="container col-sm-12 col-md-6">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter keyword"
            aria-label="Search"
            aria-describedby="search-button"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            class="btn btn-outline-dark col-sm-3"
            disabled={isLoading}
            onClick={() => refetch}
            type="button"
            id="search-button"
          >
            Recall
          </button>
        </div>
      </div>

      {/* <div className="container mt-4 d-flex">
        <div className="col-sm-12 col-md-6">
          <form className="d-flex">
            <input
              type="text"
              placeholder="Enter keyword"
              className="col-sm-4"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-dark col-sm-3"
              disabled={isLoading}
              onClick={() => refetch}
            >
              Recall
            </button>
          </form>
        </div>
      </div> */}

      {renderSearchPosts()}
    </div>
  );
};

export default SearchPost;
