"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import devCatalystLogo from "../../public/assets/DevCatalyst_logo.png";
import Link from "next/link";

interface ResponseData {
    full_name: string;
    roll_number: string;
    selected_track: string;
    [key: string]: any;
}

export default function ResultsPage() {
    const [responses, setResponses] = useState<ResponseData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const [isReleased, setIsReleased] = useState(false);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Initial check and countdown interval
    useEffect(() => {
        setIsMounted(true);
        const checkReleaseTime = () => {
            const TARGET_TIME = new Date("2026-03-02T12:00:00+05:30").getTime();
            const now = new Date().getTime();
            const difference = TARGET_TIME - now;

            if (difference <= 0) {
                setIsReleased(true);
                setTimeLeft(0);
            } else {
                setIsReleased(false);
                setTimeLeft(difference);
            }
        };

        checkReleaseTime(); // initial run
        const interval = setInterval(checkReleaseTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Fetch responses when released
    useEffect(() => {
        if (!isReleased) return;

        const fetchResponses = async () => {
            try {
                const res = await fetch("/api/responses");
                const json = await res.json();
                if (json.success && json.data) {
                    // Sort alphabetically by name
                    const sorted = json.data.sort((a: ResponseData, b: ResponseData) =>
                        (a.full_name || "").localeCompare(b.full_name || "")
                    );
                    setResponses(sorted);
                }
            } catch (err) {
                console.error("Failed to fetch responses", err);
            } finally {
                setLoading(false);
            }
        };
        fetchResponses();
    }, [isReleased]);



    if (!isMounted || timeLeft === null) return null;

    if (!isReleased) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return (
            <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans px-4">
                {/* Background match */}
                <div className="fixed inset-0 z-0" style={{ backgroundImage: "url('/assets/Collage.png')", backgroundSize: '600px', backgroundRepeat: 'repeat' }} />
                <div className="fixed inset-0 z-0 bg-black/80 backdrop-blur-md" />

                <div className="relative z-10 w-full flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-black/50 border border-white/10 p-8 sm:p-14 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-2xl text-center max-w-4xl w-full"
                    >
                        <Image src={devCatalystLogo} alt="Logo" priority className="w-20 sm:w-28 h-auto mx-auto mb-6 sm:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                        <h1 className="text-3xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 sm:mb-6 tracking-tight">
                            The Wait is Almost Over
                        </h1>
                        <p className="text-gray-300 text-base sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium">
                            SIH Registration MECS results will be unveiled soon. The countdown is on!
                        </p>

                        <div className="flex justify-center gap-2 sm:gap-6 text-white font-mono w-full px-1">
                            <div className="flex flex-col items-center flex-1 sm:flex-none">
                                <div className="text-2xl sm:text-6xl md:text-7xl font-bold bg-white/5 backdrop-blur-md px-2 sm:px-6 py-3 sm:py-6 rounded-2xl sm:rounded-3xl border border-white/10 shadow-inner w-full min-w-[3rem] sm:min-w-[6rem] text-center">{String(days).padStart(2, '0')}</div>
                                <div className="text-[9px] sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-3 sm:mt-4 text-purple-300 font-sans font-semibold">Days</div>
                            </div>
                            <div className="text-2xl sm:text-6xl md:text-7xl font-bold py-3 sm:py-6 opacity-30 text-purple-300 self-start mt-0.5 sm:mt-0">:</div>
                            <div className="flex flex-col items-center flex-1 sm:flex-none">
                                <div className="text-2xl sm:text-6xl md:text-7xl font-bold bg-white/5 backdrop-blur-md px-2 sm:px-6 py-3 sm:py-6 rounded-2xl sm:rounded-3xl border border-white/10 shadow-inner w-full min-w-[3rem] sm:min-w-[6rem] text-center">{String(hours).padStart(2, '0')}</div>
                                <div className="text-[9px] sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-3 sm:mt-4 text-purple-300 font-sans font-semibold">Hours</div>
                            </div>
                            <div className="text-2xl sm:text-6xl md:text-7xl font-bold py-3 sm:py-6 opacity-30 text-purple-300 self-start mt-0.5 sm:mt-0">:</div>
                            <div className="flex flex-col items-center flex-1 sm:flex-none">
                                <div className="text-2xl sm:text-6xl md:text-7xl font-bold bg-white/5 backdrop-blur-md px-2 sm:px-6 py-3 sm:py-6 rounded-2xl sm:rounded-3xl border border-white/10 shadow-inner w-full min-w-[3rem] sm:min-w-[6rem] text-center">{String(minutes).padStart(2, '0')}</div>
                                <div className="text-[9px] sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-3 sm:mt-4 text-purple-300 font-sans font-semibold">Mins</div>
                            </div>
                            <div className="text-2xl sm:text-6xl md:text-7xl font-bold py-3 sm:py-6 opacity-30 text-purple-300 self-start mt-0.5 sm:mt-0">:</div>
                            <div className="flex flex-col items-center flex-1 sm:flex-none">
                                <div className="text-2xl sm:text-6xl md:text-7xl font-bold bg-white/5 backdrop-blur-md px-2 sm:px-6 py-3 sm:py-6 rounded-2xl sm:rounded-3xl border border-white/10 shadow-inner w-full min-w-[3rem] sm:min-w-[6rem] text-center">{String(seconds).padStart(2, '0')}</div>
                                <div className="text-[9px] sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-3 sm:mt-4 text-purple-300 font-sans font-semibold">Secs</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    const filteredResponses = responses.filter((r) => {
        const query = searchQuery.toLowerCase();
        return (
            (r.full_name || "").toLowerCase().includes(query) ||
            (r.roll_number || "").toLowerCase().includes(query) ||
            (r.selected_track || "").toLowerCase().includes(query)
        );
    });

    return (
        <div className="relative min-h-screen py-8 px-4 flex flex-col items-center">
            {/* Tiled Collage Background matching Form Page */}
            <div className="fixed inset-0 z-0" style={{ backgroundImage: "url('/assets/Collage.png')", backgroundSize: '600px', backgroundRepeat: 'repeat' }} />
            <div className="fixed inset-0 z-0 bg-black/60" />

            {/* Navbar Minimal */}
            <nav className="relative z-20 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto text-white">
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src={devCatalystLogo}
                        alt="DevCatalyst Logo"
                        className="h-10 w-auto group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300"
                        priority
                    />
                    <span className="font-bold text-xl tracking-tight hidden sm:block">DevCatalyst</span>
                </Link>
                <Link href="/" className="text-sm font-medium hover:text-[#3b82f6] transition-colors">
                    Back to Home
                </Link>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 flex flex-col flex-1 pb-20">

                <motion.div
                    className="text-center mt-10 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Recruitment Results
                    </h1>
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] p-6 sm:p-10 w-full max-w-5xl mx-auto text-left relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <p className="text-gray-200 text-sm sm:text-lg leading-relaxed whitespace-pre-line tracking-wide">
                                <span className="text-xl sm:text-2xl font-bold text-white mb-4 block">
                                    🎉 Congratulations!
                                </span>
                                {`We are delighted to welcome the newly selected members of DevCatalyst.\n\nYour enthusiasm, effort, and commitment truly stood out. We’re excited to have you join us on this journey of innovation, teamwork, and impact.\n\n`}
                                <span className="font-bold text-white">Below is the list of finalized members..</span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Team Specific Tasks Section */}
                {false && (
                    <motion.div
                        className="w-full max-w-7xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">Team-Specific Tasks Section</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {/* Content Creation Team */}
                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col h-full shadow-[0_4px_24px_0_rgba(0,0,0,0.3)] hover:border-purple-500/50 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-[#a855f7]">🔹</span> Content Creation Team
                                </h3>
                                <div className="flex-1 space-y-4 text-white text-base sm:text-lg mt-4 font-medium">
                                    <div>
                                        <strong className="text-purple-300 block mb-1 font-bold">Description</strong>
                                        <p>This team focuses on visual storytelling, design sense, and content quality. We’re looking for students who enjoy creating posters, reels, edits, and visual narratives.</p>
                                    </div>
                                    <div>
                                        <strong className="text-purple-300 block mb-1 font-bold">What we’re evaluating</strong>
                                        <ul className="list-disc pl-5 space-y-1 text-white/90">
                                            <li>Visual sense & creativity</li>
                                            <li>Editing / design fundamentals</li>
                                            <li>Ability to tell a story through content</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-purple-300 block mb-1 font-bold">Task Instructions</strong>
                                        <p>Please download the task PDF below and follow all instructions mentioned inside.</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <a
                                        href="/assets/Content_Creation_Tasks.pdf"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                    >
                                        <span>⬇️</span> Download Content Creation Team Tasks (PDF)
                                    </a>
                                </div>
                            </div>

                            {/* Outreach Team */}
                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col h-full shadow-[0_4px_24px_0_rgba(0,0,0,0.3)] hover:border-blue-500/50 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-[#3b82f6]">🔹</span> Outreach Team
                                </h3>
                                <div className="flex-1 space-y-4 text-white text-base sm:text-lg mt-4 font-medium">
                                    <div>
                                        <strong className="text-blue-300 block mb-1 font-bold">Description</strong>
                                        <p>The Outreach Team represents DevCatalyst externally. This role involves communication, professionalism, and relationship-building.</p>
                                    </div>
                                    <div>
                                        <strong className="text-blue-300 block mb-1 font-bold">What we’re evaluating</strong>
                                        <ul className="list-disc pl-5 space-y-1 text-white/90">
                                            <li>Clarity in written communication</li>
                                            <li>Strategic thinking</li>
                                            <li>Professional tone and approach</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-blue-300 block mb-1 font-bold">Task Instructions</strong>
                                        <p>Please complete both tasks mentioned in the PDF and submit them as instructed.</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <a
                                        href="/assets/Outreach_Team_Tasks.pdf"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                    >
                                        <span>⬇️</span> Download Outreach Team Tasks (PDF)
                                    </a>
                                </div>
                            </div>

                            {/* Technical Team */}
                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col h-full shadow-[0_4px_24px_0_rgba(0,0,0,0.3)] hover:border-teal-500/50 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-[#14b8a6]">🔹</span> Technical Team
                                </h3>
                                <div className="flex-1 space-y-4 text-white text-base sm:text-lg mt-4 font-medium">
                                    <div>
                                        <strong className="text-teal-300 block mb-1 font-bold">Description</strong>
                                        <p>The Technical Team builds and maintains DevCatalyst’s digital platforms. We’re looking for students who enjoy building, experimenting, and learning by doing.</p>
                                    </div>
                                    <div>
                                        <strong className="text-teal-300 block mb-1 font-bold">What we’re evaluating</strong>
                                        <ul className="list-disc pl-5 space-y-1 text-white/90">
                                            <li>Logical thinking</li>
                                            <li>Basic technical understanding</li>
                                            <li>Ability to complete a small real-world task independently</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-teal-300 block mb-1 font-bold">Task Instructions</strong>
                                        <p>You are required to complete any ONE task mentioned in the PDF.</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <a
                                        href="/assets/Technical_Team_Tasks.pdf"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                    >
                                        <span>⬇️</span> Download Technical Team Tasks (PDF)
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Team */}
                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col h-full shadow-[0_4px_24px_0_rgba(0,0,0,0.3)] hover:border-pink-500/50 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-[#ec4899]">🔹</span> Social Media Team
                                </h3>
                                <div className="flex-1 space-y-4 text-white text-base sm:text-lg mt-4 font-medium">
                                    <div>
                                        <strong className="text-pink-300 block mb-1 font-bold">Description</strong>
                                        <p>This team manages DevCatalyst’s online presence and content strategy. We’re looking for students who understand how content reaches and engages people.</p>
                                    </div>
                                    <div>
                                        <strong className="text-pink-300 block mb-1 font-bold">What we’re evaluating</strong>
                                        <ul className="list-disc pl-5 space-y-1 text-white/90">
                                            <li>Content sense & writing clarity</li>
                                            <li>Understanding of platforms (LinkedIn / Instagram)</li>
                                            <li>Creativity + strategic thinking</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-pink-300 block mb-1 font-bold">Task Instructions</strong>
                                        <p>Please complete all tasks mentioned in the PDF and follow the submission rules carefully.</p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <a
                                        href="/assets/Social_Media_Tasks.pdf"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                    >
                                        <span>⬇️</span> Download Social Media Team Tasks (PDF)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {
                    loading ? (
                        <div className="flex justify-center items-center py-32">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
                        </div>
                    ) : (
                        <motion.div
                            className="flex flex-col gap-6 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-6 mt-2 text-transparent bg-clip-text bg-white">
                                Finalised Candidates
                            </h2>
                            {/* Search Bar */}
                            <div className="relative max-w-full mx-auto w-full mb-6 sm:mb-8">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search candidates..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 sm:py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-xl transition-all font-medium text-sm sm:text-lg"
                                />
                            </div>

                            {/* Premium Table Layout (Responsive sizes applied) */}
                            <div className="bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden w-full max-w-[1400px] mx-auto">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-full">
                                        <thead>
                                            <tr className="bg-white/10 text-gray-300 text-[10px] sm:text-[15px] tracking-wider uppercase border-b border-white/10 font-bold">
                                                <th className="px-3 py-4 sm:px-8 sm:py-6">Candidate</th>
                                                <th className="px-3 py-4 sm:px-8 sm:py-6">Roll Number</th>
                                                <th className="px-4 py-4 sm:px-8 sm:py-6 hidden sm:table-cell">Branch</th>
                                                <th className="px-3 py-4 sm:px-8 sm:py-6 text-right sm:text-left">Track</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <AnimatePresence>
                                                {filteredResponses.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={4} className="px-4 py-8 sm:py-16 text-center text-gray-400 font-medium text-sm sm:text-lg">
                                                            No candidates found matching your search.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    filteredResponses.map((res, i) => (
                                                        <motion.tr
                                                            key={res.roll_number || i}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="hover:bg-white/5 transition-colors group cursor-default"
                                                        >
                                                            <td className="px-3 py-4 sm:px-8 sm:py-6">
                                                                <div className="font-semibold text-white group-hover:text-[#b388ff] transition-colors text-xs sm:text-xl">
                                                                    {res.full_name || "Unknown"}
                                                                </div>
                                                                {/* Display branch under the name on mobile */}
                                                                <div className="sm:hidden text-[10px] text-gray-400 mt-1 font-medium">
                                                                    {res.branch || "N/A"}
                                                                </div>
                                                            </td>
                                                            <td className="px-3 py-4 sm:px-8 sm:py-6 whitespace-nowrap">
                                                                <span className="font-mono text-[10px] sm:text-lg font-semibold text-gray-300 bg-black/50 border border-white/5 px-2 py-1 sm:px-4 sm:py-2 rounded-lg">
                                                                    {res.roll_number || "N/A"}
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-4 sm:px-8 sm:py-6 whitespace-nowrap hidden sm:table-cell">
                                                                <span className="text-gray-300 text-sm sm:text-lg font-medium">
                                                                    {res.branch || "N/A"}
                                                                </span>
                                                            </td>
                                                            <td className="px-3 py-4 sm:px-8 sm:py-6 whitespace-nowrap text-right sm:text-left">
                                                                <span className="inline-flex items-center px-1.5 py-1 sm:px-4 sm:py-2 bg-purple-500/20 text-purple-200 border border-purple-500/30 rounded-lg text-[10px] sm:text-base font-bold tracking-wide shadow-sm">
                                                                    {res.selected_track || "N/A"}
                                                                </span>
                                                            </td>
                                                        </motion.tr>
                                                    ))
                                                )}
                                            </AnimatePresence>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Thanking Card */}
                            <div className="mt-8 mb-4 bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] p-6 sm:p-8 w-full max-w-4xl mx-auto text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 space-y-5">
                                    <p className="text-white font-bold text-xl sm:text-2xl tracking-wide flex items-center justify-center gap-2">
                                        <span className="text-blue-400">💙</span> To All Applicants
                                    </p>
                                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
                                    <div className="text-gray-300 text-sm sm:text-lg leading-relaxed font-medium space-y-4 max-w-2xl mx-auto">
                                        <p>
                                            Thank you to everyone who applied. The selection process was competitive, and not being selected this time does not define your potential.
                                        </p>
                                        <p>
                                            Keep learning, keep building, and keep showing up there will always be more opportunities ahead.
                                        </p>
                                    </div>
                                    <div className="pt-4 drop-shadow-md">
                                        <p className="text-purple-300 text-lg sm:text-xl font-bold font-mono tracking-wider flex items-center justify-center gap-2">
                                            TEAM DEVCATALYST <span className="text-2xl">🚀</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )
                }

                {/* Google Forms footer mark */}
                <div className="max-w-[770px] mx-auto mt-6 text-center w-full">
                    <p className="text-xs text-[white]">
                        This content is neither created nor endorsed by Google. - Terms of Service - Privacy Policy
                    </p>
                    <p className="text-xl text-[white] font-semibold mt-2 opacity-50"> Google Forms </p>
                </div>
            </div >
        </div >
    );
}
