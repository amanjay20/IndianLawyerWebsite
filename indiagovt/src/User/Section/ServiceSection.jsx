import React from "react";

const cards = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/man-making-his-move_53876-64862.jpg",
    title: "Legal Consultation",
    description: "Get expert legal advice from our top advocates.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXgqiIlliNmiZcp7INXGND-kO6U3X-wepsw&s",
    title: "Criminal Law",
    description: "We specialize in handling criminal cases efficiently.",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/155431938/photo/civil-law.jpg?s=612x612&w=0&k=20&c=AhztPK5XXOH1kMh11BwNCUmtAbPboy7u2gkG0Jb9MaA=",
    title: "Civil Litigation",
    description: "Best representation for all civil disputes and cases.",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1051720396/photo/business-law-and-gavel-in-a-court.jpg?s=612x612&w=0&k=20&c=SRt8dsN8tLZIuec_0fFSg4hZ0pkKvDZYMGFKKNlD05M=",
    title: "Business Law",
    description: "Helping businesses with legal compliance and contracts.",
  },
];

const ServiceSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
              <button className="mt-4 bg-amber-600 text-white px-4 py-2 rounded hover:bg-black hover:text-white">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
