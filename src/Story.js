import { useParams } from "react-router-dom";
function Story() {
  const { story_name } = useParams();
  return (
    <>
      <div>Story: {story_name}</div>
    </>
  );
}

export default Story;
