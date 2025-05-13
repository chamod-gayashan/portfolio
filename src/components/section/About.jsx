import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontEndSkills = [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
    ];

    const backEndSkills = [
        "php",
        "java",
        "python",

    ]

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-3"
        >   
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                        As a passionate technologist and lifelong learner, I specialize in building robust, scalable solutions using PHP, MySQL, JavaScript, Java, Laravel, and Spring Boot. 
                        With deep experience in Linux environments and cloud platforms, I thrive at the intersection of backend development, system administration, 
                        and modern cloud infrastructure.
                        Outside of work, I'm a dedicated car enthusiast and tech lover, always exploring the latest innovations and trends in both fields.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontEndSkills.map((skill, key) =>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,150,2246,0.2)] transition
                                        ">
                                        {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backEndSkills.map((skill, key) =>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,150,2246,0.2)] transition
                                        ">
                                        {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S in Computer Science </strong> - XYZ University
                                    (2019 - 2024)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management...
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Software Engineer at ABC Corp (2020 - Present)
                                    {""}
                                    </h4>
                                    <p>
                                        Developed and maintained microservices for cloud-based applications.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Intern at DEF Startups (2019) 
                                    {""}
                                    </h4>
                                    <p>
                                        Assisted in building front-end components and integration REST APIs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
};