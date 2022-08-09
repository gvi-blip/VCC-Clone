import { useParams } from "react-router-dom";
function Industry() {
  const { industry_name } = useParams();
  return (
    <>
      <div>Industry: {industry_name}</div>
    </>
  );
}

export default Industry;
