import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./card";
import Pagination from "./pagination";
import Navbar from "./navbar";
import Footer from "./footer";

const RandomUserPage = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/", {
        params: {
          seed: "abc",
          page: currentPage,
          results: dataPerPage,
        },
      })
      .then((response) => {
        const fetchedData = response?.data?.results || [];
        setUserData(fetchedData);
        setLoading(false);
        console.log("Data fetched successfully");
      })
      .catch((err) => {
        console.error("Error while fetching data", err);
        setLoading(false);
      });
  }, [currentPage, dataPerPage]);

  return (<>
      <Navbar/>
      <div className="mainContainer w-full flex flex-col items-center justify-center px-10 pt-2">
      <h1 className="font-bold text-gray-900 dark:text-white text-2xl">
        Welcome to our Random User Website
      </h1>
      <div className="mt-5 flex justify-center w-full flex-wrap gap-5 mx-auto">
        {loading ? (
          <div className="w-screen h-screen pb-20 flex items-center justify-center">
            <img
              className="w-14 h-14 animate-spin"
              src="https://www.svgrepo.com/show/169757/loading-process.svg"
              alt="Loading icon"
            />
          </div>
        ) : (
          userData?.map((item, index) => (
            <UserCard userInfo={item} key={index} />
          ))
        )}
      </div>
      {!loading ? (
        <div className="mt-5">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        ""
      )}
    </div>
    <Footer/>
  </>

  );
};

export default RandomUserPage;
