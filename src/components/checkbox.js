import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkbox = () => {
  const [posts, setPosts] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //   const getPosts = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then(res => setPosts(res.data))
  //       .catch(err => console.log(err));
  //   };

  useEffect(() => {
    getPosts();
  }, []);

  const handleSelectedUsers = id => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => id !== userId));
    } else {
      setSelectedUsers(selectedUsers.concat([id]));
    }
  };

  return (
    <div>
      {posts.map(post => {
        return (
          <>
            <input
              type="checkbox"
              value={post.id}
              onChange={() => handleSelectedUsers(post.id)}
            />{" "}
            {post.title}
            <br />
          </>
        );
      })}
      <button onClick={() => console.log(selectedUsers)}>submit</button>
    </div>
  );
};

export default Checkbox;
