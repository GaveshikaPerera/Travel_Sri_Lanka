import { FaCheckCircle } from "react-icons/fa";

const ThingsToDo = ({ destination }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-12">

      <h2 className="text-3xl text-white font-bold mb-8">
        Things To Do
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {destination.activities?.map((item, index) => (
          <div
            key={index}
            className="bg-[#253745] rounded-xl p-5 flex items-center gap-3"
          >
            <FaCheckCircle className="text-[#00C896]" />

            <span className="text-white">
              {item}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
};

export default ThingsToDo;