const educationData = [
  {
    institution: "Al-Azhar University",
    degree: "Bachelor's in Computer Science & Mathematics",
    year: "Sep 2019 -- Jul 2023",
    description: "Grade: Very Good (GPA: 3.6/4.0) -- Ranked among Top Students.",
  },
  {
    institution: "Route Academy",
    degree: "Front-End Development Diploma",
    year: "Oct 2022 -- Mar 2023",
    description: "Intensive training on modern frontend technologies and real-world projects.",
  },
];

const highlightGrade = (desc: string) => {
  return desc
    .replace(/(Very Good)/g, '<span class="text-neon-pink font-bold">$1</span>')
    .replace(
      /(computer science)/gi,
      '<span class="text-blue-500 dark:text-blue-400 font-bold">$1</span>'
    )
    .replace(
      /(pure mathematics)/gi,
      '<span class="text-neon-purple font-bold">$1</span>'
    )
    .replace(/(React\.js)/g, '<span class="text-cyan-600 dark:text-cyan-400 font-bold">$1</span>')
    .replace(/(Next\.js)/g, '<span class="text-foreground font-bold">$1</span>');
};

const Education = () => {
  return (
    <div>
      <h5 className="text-xs text-neon-pink font-bold uppercase mb-2 tracking-widest">
        Education
      </h5>
      <div className="relative border-l border-border ml-4 pl-6 space-y-10">
        {educationData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-4 top-1 w-3 h-3 bg-neon-pink rounded-full shadow-lg"></div>
            <p className="text-sm text-muted-foreground">{item.year}</p>
            <h4 className="text-foreground font-semibold text-base mt-1">
              {item.title}
            </h4>
            <p className="text-blue-500 dark:text-blue-400 text-sm italic mb-2 font-semibold">
              {item.place}
            </p>
            <p
              className="text-muted-foreground text-sm leading-relaxed"
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
