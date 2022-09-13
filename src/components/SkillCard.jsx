export default function SkillCard({ skills }) {
  return (
    <div className="skill-card">
      <p></p>
      <ul className="tools-list">
        {skills.map((s) => (
          <li>
            <img src={s.img} alt={s.name}></img>
            <p>{s.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
