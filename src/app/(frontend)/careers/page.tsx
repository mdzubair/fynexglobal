"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  location: string;
  country: string;
  department: string;
  workplace: "On-site" | "Remote" | "Hybrid";
  type: "Full Time" | "Part Time" | "Contract";
  excerpt: string;
  thumb?: string;
};

const JOBS: Job[] = [
  {
    id: "1",
    title: "Art Director",
    location: "Cairo, Egypt",
    country: "Egypt",
    department: "Design",
    workplace: "On-site",
    type: "Full Time",
    excerpt:
      "Lead creative direction for campaigns, guide designers and produce high-quality visual content.",
    thumb: "/job-thumb.jpg",
  },
  {
    id: "2",
    title: "Community Lead (EN/AR)",
    location: "New Cairo, Egypt",
    country: "Egypt",
    department: "Community",
    workplace: "On-site",
    type: "Full Time",
    excerpt:
      "Manage community engagement, moderate forums and support user growth and retention.",
    thumb: "/job-thumb.jpg",
  },
  {
    id: "3",
    title: "Frontend Engineer",
    location: "Remote (Global)",
    country: "All Countries",
    department: "Engineering",
    workplace: "Remote",
    type: "Full Time",
    excerpt:
      "Build responsive user interfaces using React/Next.js and collaborate with designers.",
    thumb: "/job-thumb.jpg",
  },
  {
    id: "4",
    title: "QA Engineer",
    location: "Dubai, UAE",
    country: "UAE",
    department: "Engineering",
    workplace: "Hybrid",
    type: "Full Time",
    excerpt:
      "Automate and validate platform functionality to ensure top quality releases.",
    thumb: "/job-thumb.jpg",
  },
];

const COUNTRIES = [
  "All Countries",
  ...Array.from(
    new Set(JOBS.map((j) => j.country).filter((c) => c !== "All Countries"))
  ),
];
const DEPARTMENTS = [
  "All Departments",
  ...Array.from(new Set(JOBS.map((j) => j.department))),
];
const WORKPLACES = ["All", "On-site", "Remote", "Hybrid"];

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [workplace, setWorkplace] = useState(WORKPLACES[0]);

  const filteredJobs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return JOBS.filter((job) => {
      if (country !== "All Countries" && job.country !== country) return false;
      if (department !== "All Departments" && job.department !== department)
        return false;
      if (workplace !== "All" && job.workplace !== workplace) return false;
      if (!q) return true;
      return (
        job.title.toLowerCase().includes(q) ||
        job.excerpt.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q)
      );
    });
  }, [search, country, department, workplace]);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 mt-12 mb-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* text left */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Join Our <span className="text-green-600">Award-</span>
              <span className="text-green-500">Winning Team!</span>
            </h1>

            <p className="mt-6 text-gray-600 text-xl leading-relaxed">
              Join DB Investing and be part of a passionate team that values
              diverse perspectives and continuous growth. If this sounds like
              you, we’d love to hear from you.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <button
                onClick={() => (window.location.href = "#open-positions")}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-semibold transition"
              >
                View Open Positions
              </button>

              <div className="text-sm text-gray-500">
                <div className="uppercase text-xs font-semibold mb-2 text-gray-400">
                  Trusted by
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <span>★ Trustpilot</span>
                  <span>· Investing.com</span>
                  <span>· Reviews.io</span>
                </div>
              </div>
            </div>
          </div>

          {/* media right */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-[640px] rounded-2xl border-2 border-green-600 shadow-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/team-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section
        id="open-positions"
        className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 mt-12 mb-12"
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Open <span className="text-green-600">Positions</span>
            </h2>
            <p className="mt-3 text-gray-500 text-xl">
              Find roles across departments and offices worldwide.
            </p>
          </div>

          {/* search */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by job title"
                className="w-full border border-green-600 rounded-full py-3 px-4 pl-10 text-base focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-3 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* filters */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            <label className="text-lg text-gray-600">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border border-green-600 rounded-md px-3 py-2 text-lg"
            >
              {COUNTRIES.map((c, idx) => (
                <option key={`country-${idx}`} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <label className="text-lg text-gray-600 ml-4">Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border border-green-600 rounded-md px-3 py-2 text-lg"
            >
              {DEPARTMENTS.map((d, idx) => (
                <option key={`dept-${idx}`} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <label className="text-lg text-gray-600 ml-4">Workplace</label>
            <select
              value={workplace}
              onChange={(e) => setWorkplace(e.target.value)}
              className="border border-green-600 rounded-md px-3 py-2 text-lg"
            >
              {WORKPLACES.map((w, idx) => (
                <option key={`work-${idx}`} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>

          <div className="text-lg text-gray-500">
            {filteredJobs.length} Open Positions in{" "}
            {Array.from(new Set(filteredJobs.map((j) => j.country))).length}{" "}
            Countries
          </div>
        </div>

        {/* job cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <article
              key={job.id}
              className="flex flex-col md:flex-row items-stretch gap-4 bg-white border-2 border-green-600 rounded-lg p-4 shadow-md hover:shadow-lg transition"
            >
              <div className="w-full md:w-40 flex items-center justify-center">
                <div className="relative w-32 h-20 rounded-md overflow-hidden border border-green-600">
                  <Image
                    src={job.thumb ?? "/job-thumb.jpg"}
                    alt={job.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">
                      {job.country === "All Countries" ? "🌍" : "🏳️"}
                    </span>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {job.type} · {job.workplace}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {job.excerpt}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="text-sm text-gray-500">{job.location}</div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center gap-2 text-sm bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-700 transition"
                  >
                    View Job →
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {filteredJobs.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No positions match your search / filter — try clearing filters.
            </div>
          )}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="max-w-7xl mx-auto bg-gray-50 p-8 md:p-10 rounded-md shadow-sm mt-12 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          About <span className="text-green-600">Us:</span>
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          <strong>About DB Investing</strong> <br />
          DB Investing is a regulated and recognized financial brokerage firm
          that empowers traders and investors with cutting-edge tools, expert
          insights, and a secure trading environment.
        </p>
      </section>

      {/* OUR COMPANY */}
      <section className="text-center max-w-7xl mx-auto p-8 md:p-10 rounded-md  mt-12 mb-12">
        <h2 className="text-3xl font-bold">
          Our <span className="text-green-600">Company</span>
        </h2>
        <div className="mt-10 flex justify-center">
          <div className="bg-black rounded-3xl p-3 shadow-xl max-w-3xl w-full">
            <video
              src="/company-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="max-w-7xl mx-auto mt-20 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Our <span className="text-green-600">Mission:</span>
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          <strong>Our Mission: Empowering Financial Success</strong> <br />
          At DB Investing, our mission is simple: To empower investors through
          the global financial markets by 2030, delivering innovative solutions
          that enhance financial literacy and independence.
        </p>
      </section>
    </main>
  );
}
