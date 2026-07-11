import { FaCheckCircle } from "react-icons/fa";

const IncludedSection = ({ includes }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-16">

      <h2 className="text-3xl font-bold text-white mb-8">
        Package Includes
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {includes.map((item, index) => (

          <div
            key={index}
            className="bg-[#253745] rounded-xl p-5 flex items-center gap-4"
          >

            <FaCheckCircle className="text-[#00C896] text-xl" />

            <span className="text-white">
              {item}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default IncludedSection;