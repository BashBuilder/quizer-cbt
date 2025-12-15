import React from "react";

const subjectsData = [
  { name: "Mathematics", icon: "calculator" },
  { name: "Science", icon: "atom" },
  { name: "English", icon: "book-open" },
  { name: "Geography", icon: "map-pin" },
  { name: "History", icon: "calendar" },
  { name: "Computer Science", icon: "laptop" },
  { name: "Biology", icon: "leaf" },
  { name: "Chemistry", icon: "droplet" },
  { name: "Physics", icon: "weight" },
  { name: "Art", icon: "paintbrush" },
  { name: "Music", icon: "music-note" },
  { name: "Sports", icon: "basketball" },
  { name: "Literature", icon: "book-open-variant" },
];

const Subjects = () => {
  return (
    <div className="bg-primary/5 py-16">
      <section className="container mx-auto space-y-8 px-8">
        <h1 className="text-2xl font-semibold text-zinc-700">Subjects</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {subjectsData.map((subject, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-md bg-white px-4 py-4 shadow-md transition-shadow duration-300 hover:shadow-2xl"
            >
              <span>{subject.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subjects;
