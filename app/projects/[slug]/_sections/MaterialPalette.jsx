"use client";

export default function MaterialPalette({ palette }) {
  if (!palette) return null;

  const items = palette.split(",").map((item) => item.trim());

  return (
    <section className="container">
      <div className="project-palette">
        <p className="eyebrow">Material Palette</p>

        <ul className="project-palette__list">
          {items.map((item) => (
            <li key={item} className="project-palette__chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
