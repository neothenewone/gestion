import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://wwwa.isepsantafe.edu.ar/expedientes/dependencias/"
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.post("");
      setPost(response.data);
    }
    getPost();
  }, []);

  

  if (!post) return "No post!"

  return (
    <div>
            {post.map((cate) =>
      <option key={cate.id} value={cate.id}>
      {cate.descripcion}</option>
      )}
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={alert}>Delete Post</button>
    </div>
  );
}


