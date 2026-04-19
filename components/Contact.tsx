"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiGmail, SiDiscord, SiSlack } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/sachintee", color: "from-gray-600 to-gray-800", hoverColor: "hover:shadow-gray-500/50" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/sachin-teenwal", color: "from-blue-600 to-blue-800", hoverColor: "hover:shadow-blue-500/50" },
    { name: "Twitter", icon: FaTwitter, url: "https://x.com/sachinteenwal", color: "from-sky-500 to-blue-600", hoverColor: "hover:shadow-sky-500/50" },
    { name: "Gmail", icon: SiGmail, url: "mailto:reachout.sachinteenwal@gmail.com", color: "from-red-500 to-red-700", hoverColor: "hover:shadow-red-500/50" },
  ];

  const codingProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/Sachin_Teenwal/", color: "from-orange-500 to-orange-600", hoverColor: "hover:shadow-orange-500/50" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/sachinteenwal?tab=activity", color: "from-green-500 to-emerald-600", hoverColor: "hover:shadow-green-500/50" },
    { name: "InterviewBit", url: "https://www.interviewbit.com/profile/sachin-teenwal/", color: "from-indigo-500 to-purple-600", hoverColor: "hover:shadow-indigo-500/50" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-shimmer">Let's Connect</h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's build something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Available for Opportunities</h3>
              </div>
              <p className="text-gray-400">Open to Software developer & DevOps intern</p>
            </div>

            {/* Contact Details */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

              <a href="mailto:reachout.Sachinteenwal@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition group">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition">
                  <FaEnvelope className="text-xl text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">reachout.sachinteenwal@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-xl text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">Remote / Hybrid</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-linear-to-br ${social.color} hover:shadow-lg ${social.hoverColor} transition`}
                    >
                      <Icon className="text-2xl text-white" />
                      <span className="font-semibold text-white">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

           
        
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <h3 className="text-2xl font-bold text-white mb-6">Coding Profiles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {codingProfiles.map((profile, index) => (
                  <motion.a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-linear-to-br ${profile.color} hover:shadow-lg ${profile.hoverColor} transition`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{profile.name.charAt(0)}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white block">{profile.name}</span>
                      <span className="text-xs text-white/80">View Profile</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
