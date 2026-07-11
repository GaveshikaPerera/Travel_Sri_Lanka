import guides from "../../data/guides";
import { Link } from "react-router-dom";

const RelatedGuides = ({ guideIds }) => {

  const related = guides.filter((guide) =>
    guideIds.includes(guide.id)
  );

  return (
    <section className="max-w-7xl mx-auto px-8 pb-20">

      <h2 className="text-3xl font-bold text-white mb-8">
        Recommended Guides
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {related.map((guide) => (

          <div
            key={guide.id}
            className="bg-[#253745] rounded-xl p-6 flex gap-5 items-center"
          >

            <img
              src={guide.image}
              alt={guide.name}
              className="w-28 h-28 rounded-full object-cover"
            />

            <div>

              <h3 className="text-white text-xl font-semibold">
                {guide.name}
              </h3>

              <p className="text-gray-400">
                {guide.language}
              </p>

              <Link
                to={`/guides/${guide.id}`}
                className="inline-block mt-4 bg-[#00C896] px-5 py-2 rounded-lg text-white"
              >
                View Guide
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RelatedGuides;