import downArrow from "../../../assets/22-22-play-retro.png";

export default function NextPage({ onclick = () => {} }) {
  return (
    <div className="next-content next-content mt-auto flex items-center justify-center">
      <button
        className="cursor-pointer py-3 px-5 bg-[var(--primary-color)] text-[var(--text-color)] rounded-2xl border-8 border-[var(--red-dark)]"
        onClick={onclick}
      >
        <img className="object-cover object-center rotate-90" src={downArrow} alt="next-icon" />
      </button>
    </div>
  );
}
