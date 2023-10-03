import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import stylesUpdate from "../styles/Updates.module.css";

const Updates = () => {
  const [status, setStatus] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    dataFetching();
  }, []);

  const dataFetching = () => {
    fetch("https://donateforchangeapi.onrender.com/posts/",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdates(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching updates:", error));
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
  };

  const handlePostStatus = () => {
    const timestamp = new Date().toISOString();
    const postData = { post: status, image: imageURL, timestamps: timestamp };

    fetch("http://localhost:8080/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdates((prevUpdates) => [...prevUpdates, data]);
        dataFetching(); // Fetch updates again to get the updated list
        setStatus("");
        setImageURL("");
      })
      .catch((error) => console.error("Error posting status:", error));
  };

  const handleDeleteStatus = (updateId) => {
    fetch(`http://localhost:8080/posts/delete/${updateId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        const updatedUpdates = updates.filter(
          (update) => update._id !== updateId
        );
        setUpdates(updatedUpdates);
      })
      .catch((error) => console.error("Error deleting status:", error));
  };

  const formatDate = (dateStr) => {
    console.log("Received date string:", dateStr);
  
    if (!dateStr) {
      console.log("Date string is undefined");
      return "Date not available";
    }
  
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
  
    const parsedDate = new Date(dateStr);
  
    if (isNaN(parsedDate.getTime())) {
      console.log("Invalid date string:", dateStr);
      return "Invalid Date";
    }
  
    return parsedDate.toLocaleDateString(undefined, options);
  };
  
  
  

  return (
    <div className={stylesUpdate.container}>
      <h1 className={stylesUpdate.title3}>Updates</h1>
      <div className={stylesUpdate["inputContainer"]}>
        <input
          type="text"
          placeholder="Write a new update"
          value={status}
          onChange={handleStatusChange}
          className={stylesUpdate["updateInput"]}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageURL}
          onChange={handleImageURLChange}
          className={stylesUpdate["updateInput"]}
        />
        <button
          onClick={handlePostStatus}
          className={stylesUpdate["postButton"]}
        >
          Post update
        </button>
      </div>
      <div>
        {updates.map((update) => (
          <div key={update._id} className={stylesUpdate["updateCard"]}>
            {update.image && (
              <img
                src={update.image}
                alt="Update"
                className={stylesUpdate["updateImage"]}
              />
            )}
            <div>
              <div className={stylesUpdate["username"]}>
                <FaUserCircle className={stylesUpdate["lg"]} />
                <h3>{update.username}</h3>
              </div>
              <p className={stylesUpdate["updateText"]}>{update.post}</p>
              <p className={stylesUpdate["updateTime"]}>
                Posted at: {formatDate(update.createdAt)}
              </p>
              <button
                onClick={() => handleDeleteStatus(update._id)}
                className={stylesUpdate["deleteButton"]}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
