import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import stylesUpdate from "../styles/Updates.module.css";

const Updates = () => {
  const [status, setStatus] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [updates, setUpdates] = useState([]);

  let update = [
    {
      id: "11",
      post: "On June 24, 1859, Emperors Napoleon III and Franz Joseph I engaged in the Battle of Solferino, commanding a combined total of about 270,000 troops onto the field for a single day of battle. Nearly 40,000 were either dead, injured, or missing, many of whom were simply left to die on the battlefield. Later, spectators crowded the fields, looking for loved ones, searching for items they could sell, or simply taking in the horrors of the battle .A Swiss businessman and social activist Jean Henri Dunant, who was traveling in Solferino witnessed all this.",
      image:
        "https://img.freepik.com/premium-photo/girl-is-taking-photo-with-camera_727939-5369.jpg?w=740",
      username: "Kumar Rohan",
      timestamps:
        "Wed Sep 28 2023 15:45:30 GMT+0000 (Coordinated Universal Time)",
    },
  ];

  useEffect(() => {
    // Fetch updates from your API or database
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => {
        setUpdates(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching updates:", error));
  }, []);

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
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdates([...updates, data]);
        setStatus("");
        setImageURL("");
      })
      .catch((error) => console.error("Error posting status:", error));
  };

  const handleDeleteStatus = (updateId) => {
    fetch(`http://localhost:8080/posts/delete/${updateId}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedUpdates = updates.filter(
          (update) => update._id !== updateId
        );
        setUpdates(updatedUpdates);
      })
      .catch((error) => console.error("Error deleting status:", error));
  };

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
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
        {update.map((update) => (
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
                <FaUserCircle className={stylesUpdate["lg"]}/>
                <h3>{update.username}</h3>
              </div>
              <p className={stylesUpdate["updateText"]}>{update.post}</p>
              <p className={stylesUpdate["updateTime"]}>
                Posted at: {formatDate(new Date(update.timestamps))}
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
