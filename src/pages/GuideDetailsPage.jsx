import { useParams } from "react-router-dom";
import guides from "../data/guides";

export default function GuideDetailsPage() {
  const { id } = useParams();

  const guide = guides.find(
    (g) => g.id === Number(id)
  );

  if (!guide) {
    return (
      <h1 className="text-white p-10">
        Guide Not Found
      </h1>
    );
  }

  return (
    <div className="bg-[#11212D] min-h-screen text-white">
      <h1>{guide.name}</h1>

      <img
        src={guide.image}
        alt={guide.name}
        className="w-60 rounded-xl"
      />
    </div>
  );
}