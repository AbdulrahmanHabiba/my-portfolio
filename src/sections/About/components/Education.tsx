const educationData = [
  {
    year: "NOV 2022 - MAR 2023",
    title: "Front-End Diploma",
    place: "Route Training Center",
    description:
      "Intensive training program focusing on modern frontend technologies including React.js, Next.js, TypeScript, and UI frameworks.",
  },
  {
    year: "SEP 2019 - JUN 2023",
    title: "B.Sc. in Computer Science & Mathematics",
    place: "Faculty of Science ,Al Azhar University",
    description:
      "Studied core concepts of computer science, including data structures, databases, software engineering and pure mathematics with a graduation grade of Very Good ≈ GPA 3.6/4.0.",
  },
];

const highlightGrade = (desc: string) => {
  return desc
    .replace(/(Very Good ≈ GPA 3.6\/4.0)/g, '<span class="text-pink-800 dark:text-red-300 font-bold text-[0.9rem]">$1</span>')
    .replace(
      /(computer science)/gi,
      '<span class="text-blue-400 font-bold">$1</span>'
    )
    .replace(
      /(pure mathematics)/gi,
      '<span class="text-purple-400 font-bold">$1</span>'
    )
    .replace(/(React\.js)/g, '<span class="text-cyan-400 font-bold">$1</span>')
    .replace(/(Next\.js)/g, '<span class="text-new-gray font-bold">$1</span>');
};

const Education = () => {
  return (
    <div>
      <h5 className="text-xs text-pink-800 dark:text-pink-400 font-bold uppercase mb-2 tracking-widest">
        Education
      </h5>
      <div className="relative border-l border-gray-700 ml-4 pl-6 space-y-10">
        {educationData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-pink-500 rounded-full shadow-lg"></div>
            <p className="text-sm text-new-gray">{item.year}</p>
            <h4 className="text-black dark:text-yellow-300 text-2xl font-bold text-base">
              {item.title}
            </h4>
            <p className="text-blue-400 text-sm italic mb-1 font-semibold ">
             - {item.place}
            </p>
            <p
              className="text-new-gray text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: highlightGrade(item.description),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
