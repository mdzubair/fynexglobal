import React from "react";

const ContactUs = () => {
  const offices = [
    {
      name: "UAE (Headquarters)",
      image: "/images/headquarters.png",
      address:
        "DR Group Holdings Limited, DR Invest Limited Representative Office, Dubai, UAE",
      phone: "+971 440 52760",
      email: "support@drinvesting.com",
      whatsapp: "Whatsapp Us",
    },
    {
      name: "Limassol, Cyprus",
      image: "/images/cyprus.png",
      address:
        "DR Invest Ltd, Chrysanthou Mylona 3, 3rd floor, Limassol, Cyprus",
      phone: "+357 240 83730",
      email: "support@drinvesting.com",
      whatsapp: "Whatsapp Us",
    },
    {
      name: "Mahé, Seychelles",
      image: "/images/seychelles.png",
      address: "DR Invest Ltd, Eden Island, Seychelles",
      phone: "+248 467 5200",
      email: "support@drinvesting.com",
      whatsapp: "Whatsapp Us",
    },
    {
      name: "Cairo, Egypt",
      image: "/images/egypt.png",
      address: "DR Invest Ltd, Building 9, Maadi, Cairo, Egypt",
      phone: "+20 240 83730",
      email: "support@drinvesting.com",
      whatsapp: "Whatsapp Us",
    },
    {
      name: "Valletta, Malta",
      image: "/images/malta.png",
      address: "DR Invest Ltd, Valletta, Malta",
      phone: "+356 255 83730",
      email: "support@drinvesting.com",
      whatsapp: "Whatsapp Us",
    },
    {
      name: "Riyadh, Saudi Arabia",
      image: "/images/arabia.png",
      address: "DR Invest Ltd, King Fahd Road, Riyadh, KSA",
      phone: "+966 500 83730",
      email: "support@drinvesting.com",
      whatsapp: "Whatsapp Us",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 my-12">
      {/* Offices Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={office.image}
              alt={office.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-green-600 font-semibold text-lg">
                {office.name}
              </h3>
              <p className="text-gray-700 text-sm mt-2">{office.address}</p>
              <p className="text-gray-700 text-sm mt-1">📞 {office.phone}</p>
              <p className="text-gray-700 text-sm mt-1">✉️ {office.email}</p>
              <a
                href="#"
                className="text-green-600 text-sm mt-2 inline-block hover:underline"
              >
                {office.whatsapp}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Contact + Map Section */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Contact Form */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Existing Client *</label>
              <select className="w-full p-2 rounded bg-white text-black border-none focus:outline-none">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Full Name *</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Type of Enquiry *</label>
              <select className="w-full p-2 rounded bg-white text-black">
                <option>General Enquiry (for client)</option>
                <option>Technical Support</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Language preferred *</label>
              <select className="w-full p-2 rounded bg-white text-black">
                <option>English</option>
                <option>Arabic</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Email *</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone *</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Phone"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                How may we contact you? *
              </label>
              <div className="flex gap-4">
                <label>
                  <input type="checkbox" className="mr-2" /> Email
                </label>
                <label>
                  <input type="checkbox" className="mr-2" /> Phone
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Subject *</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message *</label>
              <textarea
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Message"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map + Info */}
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map"
            className="w-full h-60 object-contain mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4">
            Our offices have a presence{" "}
            <span className="text-green-600">Worldwide</span>
          </h3>
          <p className="text-gray-700 mt-2">
            Offices and employees ready to support your needs. You can contact
            us via email, chat, phone, WhatsApp, Telegram, and more.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-600">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-red-500">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="text-sky-500">
              <i className="fab fa-telegram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
