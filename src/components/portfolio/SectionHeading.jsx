export default function SectionHeading({ title, description, id }) {
  return (
    <div className="section-heading">
      <div className="section-heading__body">
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
