import { useParams } from "react-router-dom";
function Author() {
  const { author_name } = useParams();
  return (
    <>
      <div>Author: {author_name}</div>
    </>
  );
}

export default Author;
