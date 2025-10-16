import SkillSet from "../components/SkillSet/SkillSet";
import About from "../components/About";

// export default function MainPAge() {
//     return (
//         <>
//             <section className="main-content">
//                 <div className="container">
//                     {/* hero section */}
//                     <div className="main_content pixel-glow bg-[var(--color-bg-medium)]/70 shadow-[0_0_10px var(--color-accent-neon)] mb-10">
//                         <div className="name_description  p-5">
//                             <h1 className="name text-[var(--color-text-primary)] text-xl md:text-3xl mb-3 uppercase">
//                                 Antonio Russo
//                             </h1>
//                             {/* description */}
//                             <p className="description text-[var(--color-text-secondary)] md:text-2xl">
//                                 Web Developer
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="about my-10">
//                 <div className="container">
//                     <About />
//                 </div>
//             </section>

//             <section className="skill-set">
//                 <div className="container">
//                     <SkillSet />
//                 </div>
//             </section>
//         </>
//     );
// }

export default function MainPage() {
    return (
        <>
            {/* HERO */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="bg-[var(--color-bg-medium)]/80 border border-[rgba(72,149,239,0.2)] rounded-xl shadow-[0_0_15px_rgba(72,149,239,0.25)] backdrop-blur-sm p-6 text-center">
                        <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide mb-2 drop-shadow-[0_0_4px_rgba(241,241,241,0.25)]">
                            Antonio Russo
                        </h1>
                        <p className="text-base md:text-xl text-[var(--color-text-secondary)] font-light mb-4">
                            Web Developer
                        </p>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="bg-[var(--color-bg-medium)]/70 border border-[rgba(72,149,239,0.15)] shadow-[0_0_10px_rgba(72,149,239,0.15)] rounded-xl p-5">
                        <About />
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="bg-[var(--color-bg-medium)]/70 border border-[rgba(72,149,239,0.15)] rounded-xl shadow-[0_0_10px_rgba(72,149,239,0.15)] p-5">
                        <SkillSet />
                    </div>
                </div>
            </section>
        </>
    );
}
